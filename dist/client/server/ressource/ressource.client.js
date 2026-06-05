export class RessourceClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async usage() {
        const statsObject = await this.httpClient.request('GET', `/client/servers/${this.server}/resources`);
        return statsObject.attributes;
    }
}
