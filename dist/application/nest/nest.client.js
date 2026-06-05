import { nestId } from './nest.schemas.js';
import { EggsClient } from './eggs/eggs.client.js';
import { EggClient } from './egg/egg.client.js';
export class NestClient {
    httpClient;
    eggs;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = nestId.parse(id);
        this.eggs = new EggsClient(httpClient, this.id);
    }
    egg(id) {
        return new EggClient(this.httpClient, this.id, id);
    }
    async fetch() {
        const nestObject = await this.httpClient.request('GET', `/application/nests/${this.id}`, { parseDates: true });
        return nestObject.attributes;
    }
}
