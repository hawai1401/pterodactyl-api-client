import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  NonMethodPartial,
  ObjectList,
} from '../../../types.js';
import type {
  CreateApplicationDatabase as CreateApplicationDatabasePayload,
  ApplicationDatabaseObject,
} from './database.types.js';
import {
  applicationServerDatabaseId,
  createApplicationDatabaseSchema,
} from '../server.schemas.js';
import { ApplicationServerDatabase } from './database.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';

export class ApplicationServerDatabaseManager extends BaseCacheManager<
  number,
  ApplicationServerDatabase
> {
  constructor(
    private httpClient: HttpClient,
    readonly serverId: number,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<ApplicationServerDatabase[]> {
    const databaseObjectList = await this.httpClient.request<
      ObjectList<ApplicationDatabaseObject>
    >('GET', `/application/servers/${this.serverId}/databases`, {
      parseDates: true,
    });
    return databaseObjectList.data.map((databaseObject) =>
      this.setCache(
        new ApplicationServerDatabase(
          this.httpClient,
          this,
          databaseObject.attributes,
        ),
        options?.cache,
      ),
    );
  }

  async fetch(
    id: number,
    options?: BaseFetchOptions,
  ): Promise<ApplicationServerDatabase> {
    const cacheDatabase = this.getCache(id);
    if (cacheDatabase && !options?.force) return cacheDatabase;

    const parsedId = applicationServerDatabaseId.parse(id);
    const databaseObject =
      await this.httpClient.request<ApplicationDatabaseObject>(
        'GET',
        `/application/servers/${this.serverId}/databases/${parsedId}`,
        { parseDates: true },
      );

    return this.setCache(
      new ApplicationServerDatabase(
        this.httpClient,
        this,
        databaseObject.attributes,
      ),
      options?.cache,
    );
  }

  resolve(
    id: number,
  ):
    | ApplicationServerDatabase
    | (NonMethodPartial<ApplicationServerDatabase> &
        Pick<ApplicationServerDatabase, 'id'>) {
    return (
      this.getCache(id) ??
      new ApplicationServerDatabase(this.httpClient, this, {
        id: applicationServerDatabaseId.parse(id),
        server: this.serverId,
      })
    );
  }

  async create(
    payload: CreateApplicationDatabasePayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<ApplicationServerDatabase> {
    const databaseObject = await this.httpClient.request<
      ApplicationDatabaseObject,
      zInfer<typeof createApplicationDatabaseSchema>
    >(
      'POST',
      `/application/servers/${this.serverId}/databases`,
      createApplicationDatabaseSchema.parse(payload),
      { parseDates: true },
    );
    return this.setCache(
      new ApplicationServerDatabase(
        this.httpClient,
        this,
        databaseObject.attributes,
      ),
      options?.cache,
    );
  }
}
