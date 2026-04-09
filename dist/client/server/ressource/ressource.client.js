export default class RessourceClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    usage() {
        return this.httpClient.request('GET', `/client/servers/${this.server}/resources`);
    }
}
