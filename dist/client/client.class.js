import { HttpClient } from '../class/HttpClient.js';
import { AccountClient } from './account/account.client.js';
import { ClientServerManager } from './server/server.manager.js';
export class ClientAPI {
    httpClient;
    panelUrl;
    account;
    servers;
    constructor({ apiKey, panelUrl, cacheTtl, }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.account = new AccountClient(this.httpClient);
        this.servers = new ClientServerManager(this.httpClient, this.panelUrl, cacheTtl);
    }
}
