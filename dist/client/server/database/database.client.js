import { userServerDatabaseId } from '../server.schemas.js';
import { UserServerDatabaseClient } from './password/password.client.js';
export class DatabaseClient {
    httpClient;
    server;
    password;
    database;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.password = new UserServerDatabaseClient(httpClient, server, database);
        this.database = userServerDatabaseId.parse(database);
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/databases/${this.database}`);
    }
}
