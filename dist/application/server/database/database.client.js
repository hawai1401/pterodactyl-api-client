import { applicationServerDatabaseId } from '../server.schemas.js';
import { ApplicationServerDatabaseClient } from './password/password.client.js';
export class DatabaseClient {
    httpClient;
    server;
    password;
    id;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.id = applicationServerDatabaseId.parse(database);
        this.password = new ApplicationServerDatabaseClient(httpClient, server, this.id);
    }
    async fetch() {
        const databaseObject = await this.httpClient.request('GET', `/application/servers/${this.server}/databases/${this.id}`, { parseDates: true });
        return databaseObject.attributes;
    }
    delete() {
        return this.httpClient.request('DELETE', `/application/servers/${this.server}/databases/${this.id}`);
    }
}
