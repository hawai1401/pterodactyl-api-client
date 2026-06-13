import type { infer as zInfer } from 'zod';
import type { BaseFetchOptions, ObjectList } from '../../../types.js';
import type {
  CreateApplicationDatabase as CreateApplicationDatabasePayload,
  ApplicationDatabaseObject,
} from './database.types.js';
import {
  applicationServerDatabaseId,
  createApplicationDatabaseSchema,
} from '../server.schemas.js';
import { ServerDatabase } from './database.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';

export class ServerDatabaseManager extends BaseCacheManager<
  number,
  ServerDatabase
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
  ): Promise<ServerDatabase[]> {
    const databaseObjectList = await this.httpClient.request<
      ObjectList<ApplicationDatabaseObject>
    >('GET', `/application/servers/${this.serverId}/databases`, {
      parseDates: true,
    });
    return databaseObjectList.data.map((databaseObject) =>
      this.setCache(
        new ServerDatabase(this.httpClient, this, databaseObject.attributes),
        options?.cache,
      ),
    );
  }

  async fetch(id: number, options?: BaseFetchOptions): Promise<ServerDatabase> {
    const cacheDatabase = this.getCache(id);
    if (cacheDatabase && !options?.force) return cacheDatabase;

    return this.setCache(
      new ServerDatabase(
        this.httpClient,
        this,
        (
          await this.httpClient.request<ApplicationDatabaseObject>(
            'GET',
            `/application/servers/${this.serverId}/databases/${applicationServerDatabaseId.parse(id)}`,
            { parseDates: true },
          )
        ).attributes,
      ),
      options?.cache,
    );
  }

  resolve(id: number): ServerDatabase {
    return super.resolve(
      id,
      () =>
        new ServerDatabase(this.httpClient, this, {
          id: applicationServerDatabaseId.parse(id),
          server: this.serverId,
        }),
    );
  }

  async create(
    payload: CreateApplicationDatabasePayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<ServerDatabase> {
    return this.setCache(
      new ServerDatabase(
        this.httpClient,
        this,
        (
          await this.httpClient.request<
            ApplicationDatabaseObject,
            zInfer<typeof createApplicationDatabaseSchema>
          >(
            'POST',
            `/application/servers/${this.serverId}/databases`,
            createApplicationDatabaseSchema.parse(payload),
            { parseDates: true },
          )
        ).attributes,
      ),
      options?.cache,
    );
  }
}
