import { setManagerCacheSymbol } from '../../symbols.js';
import { EggManager } from './egg/egg.manager.js';
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
    constructor(httpClient, nestManager, data, eggsTtl) {
        this.httpClient = httpClient;
        this.nestManager = nestManager;
        Object.assign(this, data);
        this.eggs = new EggManager(this.httpClient, this.id, eggsTtl);
    }
    async fetch(options) {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nests/${this.id}`, { parseDates: true })).attributes);
        this.nestManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
}
