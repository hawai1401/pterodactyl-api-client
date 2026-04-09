export default class PasswordClient {
    httpClient;
    server;
    database;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.database = database;
    }
    async rotate() {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/databases/${this.database}/rotate-password`);
        return {
            ...res,
            password: res.attributes.relationships.password.attributes.password,
        };
    }
}
