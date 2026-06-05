import { nestEggId } from '../nest.schemas.js';
export class EggClient {
    httpClient;
    nest;
    id;
    constructor(httpClient, nest, id) {
        this.httpClient = httpClient;
        this.nest = nest;
        this.id = nestEggId.parse(id);
    }
    async fetch() {
        const eggObject = await this.httpClient.request('GET', `/application/nests/${this.nest}/eggs/${this.id}`, { parseDates: true });
        return eggObject.attributes;
    }
}
