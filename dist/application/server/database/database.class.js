import { removeManagerCacheSymbol, setManagerCacheSymbol, } from '../../../symbols.js';
export class ApplicationServerDatabase {
    httpClient;
    databaseManager;
    id;
    server;
    host;
    database;
    username;
    remote;
    maxConnections;
    createdAt;
    updatedAt;
    constructor(httpClient, databaseManager, data) {
        this.httpClient = httpClient;
        this.databaseManager = databaseManager;
        Object.assign(this, data);
    }
    async fetch(options) {
        const databaseObject = await this.httpClient.request('GET', `/application/servers/${this.server}/databases/${this.id}`, { parseDates: true });
        Object.assign(this, databaseObject.attributes);
        this.databaseManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async resetPassword() {
        await this.httpClient.request('POST', `/application/servers/${this.server}/databases/${this.id}/reset-password`);
    }
    async delete() {
        this.databaseManager[removeManagerCacheSymbol](this.id);
        await this.httpClient.request('DELETE', `/application/servers/${this.server}/databases/${this.id}`);
    }
}
