import type { HttpClient } from '../../class/HttpClient.js';
import type { BaseFetchOptions, Paginated } from '../../types.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { ClientServer } from './server.class.js';
import { userServerFilterSchema } from '../client.schema.js';
import type { FetchUserServersOptions } from '../client.types.js';
import type { UserServerList, UserServer } from './server.types.js';
import { userServerId } from './server.schemas.js';

export class ClientServerManager extends BaseCacheManager<
  string,
  ClientServer
> {
  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: FetchUserServersOptions,
  ): Promise<Paginated<ClientServer>> {
    const queries = buildQueryParams({
      ...options,
      filter: userServerFilterSchema.optional().parse(options?.filter),
    });

    const serverList = await this.httpClient.request<UserServerList>(
      'GET',
      `/client?${queries}`,
      { parseDates: true },
    );

    return {
      data: serverList.data.map((serverObject) =>
        this.setCache(
          new ClientServer(
            this.httpClient,
            this.panelUrl,
            this,
            serverObject.attributes,
          ),
          options?.cache,
        ),
      ),
      pagination: serverList.meta.pagination,
    };
  }

  async fetch(id: string, options?: BaseFetchOptions): Promise<ClientServer> {
    const cacheServer = this.getCache(id);
    if (cacheServer && !options?.force) return cacheServer;

    const parsedId = userServerId.parse(id);
    const serverObject = await this.httpClient.request<UserServer>(
      'GET',
      `/client/servers/${parsedId}`,
      { parseDates: true },
    );

    return this.setCache(
      new ClientServer(
        this.httpClient,
        this.panelUrl,
        this,
        serverObject.attributes,
      ),
      options?.cache,
    );
  }

  resolve(id: string): ClientServer {
    return super.resolve(
      id,
      () =>
        new ClientServer(this.httpClient, this.panelUrl, this, {
          identifier: userServerId.parse(id),
        }),
    );
  }
}
