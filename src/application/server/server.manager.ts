import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import type {
  CreateServerPayload,
  ListServersOptions,
  ApplicationServerIds,
  ApplicationServerObject,
} from './server.types.js';
import {
  createServerSchema,
  listServersFilterSchema,
  applicationServerIdSchema,
  applicationServerId,
  applicationServerExternalId,
} from './server.schemas.js';
import { ApplicationServer } from './server.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';

export class ApplicationServerManager extends BaseCacheManager<
  number | string,
  ApplicationServer
> {
  private databasesTtl: number | undefined;

  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
    databasesTtl?: number,
  ) {
    super(cacheTtl, 'id', 'externalId');
    this.databasesTtl = databasesTtl;
  }

  async list(
    options?: ListServersOptions,
  ): Promise<Paginated<ApplicationServer>> {
    const queries = buildQueryParams({
      ...options,
      filter: listServersFilterSchema.optional().parse(options?.filter),
    });

    const serverObjectList = await this.httpClient.request<
      ObjectListWithPagination<ApplicationServerObject>
    >('GET', `/application/servers?${queries}`, { parseDates: true });

    return {
      data: serverObjectList.data.map((serverObject) =>
        this.setCache(
          new ApplicationServer(
            this.httpClient,
            this,
            serverObject.attributes,
            this.databasesTtl,
          ),
          options?.cache,
        ),
      ),
      pagination: serverObjectList.meta.pagination,
    };
  }

  async fetch(
    server: ApplicationServerIds,
    options?: BaseFetchOptions,
  ): Promise<ApplicationServer> {
    const cacheServer =
      (server.id && this.getCache(server.id)) ??
      (server.external_id && this.getCache(server.external_id));
    if (cacheServer && !options?.force) return cacheServer;

    return this.setCache(
      new ApplicationServer(
        this.httpClient,
        this,
        (
          await this.httpClient.request<ApplicationServerObject>(
            'GET',
            `/application/servers/${((s) =>
              s.id ?? `external/${s.external_id}`)(
              applicationServerIdSchema.parse(server),
            )}`,
            { parseDates: true },
          )
        ).attributes,
        this.databasesTtl,
      ),
      options?.cache,
    );
  }

  resolve(server: number | string): ApplicationServer {
    return super.resolve(server, () => {
      if (typeof server === 'number') {
        return new ApplicationServer(
          this.httpClient,
          this,
          {
            id: applicationServerId.parse(server),
          },
          this.databasesTtl,
        );
      } else {
        return new ApplicationServer(
          this.httpClient,
          this,
          {
            id: undefined as unknown as number,
            externalId: applicationServerExternalId.parse(server),
          },
          this.databasesTtl,
        );
      }
    });
  }

  async create(
    payload: CreateServerPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<ApplicationServer> {
    return this.setCache(
      new ApplicationServer(
        this.httpClient,
        this,
        (
          await this.httpClient.request<
            ApplicationServerObject,
            zInfer<typeof createServerSchema>
          >('POST', '/application/servers', createServerSchema.parse(payload), {
            parseDates: true,
          })
        ).attributes,
        this.databasesTtl,
      ),
      options?.cache,
    );
  }
}
