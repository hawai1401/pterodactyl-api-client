import { setManagerCacheSymbol } from '../../symbols.js';
export class Nest {
    httpClient;
    nestManager;
    id;
    uuid;
    author;
    name;
    description;
    createdAt;
    updatedAt;
    eggs;
    constructor(httpClient, nestManager, data) {
        this.httpClient = httpClient;
        this.nestManager = nestManager;
        Object.assign(this, data);
    }
    async fetch(options) {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nests/${this.id}`, { parseDates: true })).attributes);
        this.nestManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
}
