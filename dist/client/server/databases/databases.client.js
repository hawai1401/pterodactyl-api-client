import { createDatabaseSchema } from '../server.schemas.js';
export class DatabasesClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const databaseObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/databases`);
        return databaseObjectList.data.map((databaseObject) => databaseObject.attributes);
    }
    async create(payload) {
        const databaseObject = await this.httpClient.request('POST', `/client/servers/${this.server}/databases`, createDatabaseSchema.parse(payload));
        return {
            ...databaseObject.attributes,
            password: databaseObject.attributes.relationships.password.attributes.password,
        };
    }
}
