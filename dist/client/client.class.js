import { HttpClient } from '../class/HttpClient.js';
import { buildQueryParams } from '../utils/buildQueryParams.js';
import { AccountClient } from './account/account.client.js';
import { userServerFilterSchema } from './client.schema.js';
import { UserServerClient } from './server/server.client.js';
export class ClientAPI {
    httpClient;
    panelUrl;
    account;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.account = new AccountClient(this.httpClient);
    }
    fetchServers(options) {
        const queries = buildQueryParams({
            ...options,
            filter: userServerFilterSchema.optional().parse(options?.filter),
        });
        return this.httpClient.request('GET', `/client?${queries}`);
    }
    server(id) {
        return new UserServerClient(this.httpClient, this.panelUrl, id);
    }
}
