export default class PasswordClient {
    httpClient;
    server;
    database;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.database = database;
    }
    reset() {
        return this.httpClient.request("POST", `/application/servers/${this.server}/databases/${this.database}/reset-password`);
    }
}
