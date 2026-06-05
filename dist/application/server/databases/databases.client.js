import { applicationServerId, createApplicationDatabaseSchema, } from '../server.schemas.js';
export class DatabasesClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = applicationServerId.parse(server);
    }
    async fetch() {
        const databaseObjectList = await this.httpClient.request('GET', `/application/servers/${this.server}/databases`, {
            parseDates: true,
        });
        return databaseObjectList.data.map((databaseObject) => databaseObject.attributes);
    }
    async create(payload) {
        const databaseObject = await this.httpClient.request('POST', `/application/servers/${this.server}/databases`, createApplicationDatabaseSchema.parse(payload), { parseDates: true });
        return databaseObject.attributes;
    }
}
