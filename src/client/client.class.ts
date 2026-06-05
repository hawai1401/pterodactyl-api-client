import { HttpClient } from '../class/HttpClient.js';
import { buildQueryParams } from '../utils/buildQueryParams.js';
import { AccountClient } from './account/account.client.js';
import { userServerFilterSchema } from './client.schema.js';
import type { FetchUserServersOptions } from './client.types.js';
import { UserServerClient } from './server/server.client.js';
import type { UserServerList } from './server/server.types.js';

export class ClientAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public account: AccountClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.account = new AccountClient(this.httpClient);
  }

  fetchServers(options?: FetchUserServersOptions) {
    const filter = userServerFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({
      ...options,
      filter,
    });
    return this.httpClient.request<UserServerList>('GET', `/client?${queries}`);
  }

  server(id: string) {
    return new UserServerClient(this.httpClient, this.panelUrl, id);
  }
}
