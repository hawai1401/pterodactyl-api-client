import { HttpClient } from '../class/HttpClient.js';
import { AccountClient } from './account/account.client.js';
import { ClientServerManager } from './server/server.manager.js';

export class ClientAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public account: AccountClient;
  public servers: ClientServerManager;

  constructor({
    apiKey,
    panelUrl,
    cacheTtl,
  }: {
    apiKey: string;
    panelUrl: URL;
    cacheTtl?: number | undefined;
  }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.account = new AccountClient(this.httpClient);
    this.servers = new ClientServerManager(
      this.httpClient,
      this.panelUrl,
      cacheTtl,
    );
  }
}
