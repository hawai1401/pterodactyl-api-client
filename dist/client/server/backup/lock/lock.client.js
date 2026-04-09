export default class LockClient {
    httpClient;
    server;
    backup;
    constructor(httpClient, server, backup) {
        this.httpClient = httpClient;
        this.server = server;
        this.backup = backup;
    }
    toggle() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/backups/${this.backup}/lock`);
    }
}
