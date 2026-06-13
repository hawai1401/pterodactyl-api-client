import { setManagerCacheSymbol } from '../../../symbols.js';
export class Egg {
    httpClient;
    eggManager;
    id;
    uuid;
    name;
    nest;
    author;
    description;
    dockerImage;
    dockerImages;
    config;
    startup;
    script;
    createdAt;
    updatedAt;
    constructor(httpClient, eggManager, data) {
        this.httpClient = httpClient;
        this.eggManager = eggManager;
        Object.assign(this, data);
    }
    async fetch(options) {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nests/${this.nest}/eggs/${this.id}`, { parseDates: true })).attributes);
        this.eggManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
}
