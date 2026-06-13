import { setManagerCacheSymbol } from '../../symbols.js';
import { ApplicationEggManager } from './egg/egg.manager.js';
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
        this.eggs = new ApplicationEggManager(this.httpClient, this.id);
    }
    async fetch(options) {
        const nestObject = await this.httpClient.request('GET', `/application/nests/${this.id}`, { parseDates: true });
        Object.assign(this, nestObject.attributes);
        this.nestManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
}
