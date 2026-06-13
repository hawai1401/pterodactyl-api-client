import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  NonMethodPartial,
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
  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id', 'externalId');
  }

  async list(
    options?: ListServersOptions,
  ): Promise<Paginated<ApplicationServer>> {
    const filter = listServersFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({
      ...options,
      filter,
    });

    const serverObjectList = await this.httpClient.request<
      ObjectListWithPagination<ApplicationServerObject>
    >('GET', `/application/servers?${queries}`, { parseDates: true });

    return {
      data: serverObjectList.data.map((serverObject) =>
        this.setCache(
          new ApplicationServer(this.httpClient, this, serverObject.attributes),
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

    const { id, external_id } = applicationServerIdSchema.parse(server);
    const serverObject = await this.httpClient.request<ApplicationServerObject>(
      'GET',
      `/application/servers/${id ?? `external/${external_id}`}`,
      { parseDates: true },
    );

    return this.setCache(
      new ApplicationServer(this.httpClient, this, serverObject.attributes),
      options?.cache,
    );
  }

  resolve(
    server: number | string,
  ):
    | ApplicationServer
    | (NonMethodPartial<ApplicationServer> &
        Pick<ApplicationServer, 'id' | 'externalId'>) {
    const cacheServer = this.getCache(server);
    if (cacheServer) return cacheServer;

    if (typeof server === 'number') {
      return new ApplicationServer(this.httpClient, this, {
        id: applicationServerId.parse(server),
      });
    } else {
      return new ApplicationServer(this.httpClient, this, {
        id: undefined as unknown as number,
        externalId: applicationServerExternalId.parse(server),
      });
    }
  }

  async create(
    payload: CreateServerPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<ApplicationServer> {
    const serverObject = await this.httpClient.request<
      ApplicationServerObject,
      zInfer<typeof createServerSchema>
    >('POST', '/application/servers', createServerSchema.parse(payload), {
      parseDates: true,
    });
    return this.setCache(
      new ApplicationServer(this.httpClient, this, serverObject.attributes),
      options?.cache,
    );
  }
}
