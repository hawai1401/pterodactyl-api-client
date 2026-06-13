export class UserServerDatabaseClient {
    httpClient;
    server;
    database;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.database = database;
    }
    async rotate() {
        const databaseObject = await this.httpClient.request('POST', `/client/servers/${this.server}/databases/${this.database}/rotate-password`);
        return {
            ...databaseObject,
            password: databaseObject.attributes.relationships.password.attributes.password,
        };
    }
}
