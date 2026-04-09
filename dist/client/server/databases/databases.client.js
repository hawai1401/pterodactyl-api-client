import { createDatabaseSchema } from '../server.schemas.js';
export default class DatabasesClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    list() {
        return this.httpClient.request('GET', `/client/servers/${this.server}/databases`);
    }
    async create(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/databases`, createDatabaseSchema.parse(options));
        return {
            ...res,
            password: res.attributes.relationships.password.attributes.password,
        };
    }
}
