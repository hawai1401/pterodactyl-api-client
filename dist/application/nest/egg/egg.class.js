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
    variables;
    constructor(httpClient, eggManager, data) {
        this.httpClient = httpClient;
        this.eggManager = eggManager;
        const { relationships, ...attributes } = data;
        Object.assign(this, attributes);
        Object.assign(this, { variables: relationships?.variables });
    }
    async fetch(options) {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nests/${this.nest}/eggs/${this.id}`, { parseDates: true })).attributes);
        this.eggManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
}
