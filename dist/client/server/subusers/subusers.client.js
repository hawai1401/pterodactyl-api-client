import { createSubuserSchema } from '../server.schemas.js';
export class SubusersClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const subuserObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/users`, { parseDates: true });
        return subuserObjectList.data.map((subuserObject) => subuserObject.attributes);
    }
    async create(payload) {
        const subuserObject = await this.httpClient.request('POST', `/client/servers/${this.server}/users`, createSubuserSchema.parse(payload), { parseDates: true });
        return subuserObject.attributes;
    }
}
