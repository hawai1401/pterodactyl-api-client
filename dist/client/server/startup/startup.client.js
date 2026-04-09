import { editVariableSchema } from '../server.schemas.js';
export default class StartupClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    info() {
        return this.httpClient.request('GET', `/client/servers/${this.server}/settings/startup`);
    }
    edit(options) {
        return this.httpClient.request('PUT', `/client/servers/${this.server}/settings/startup`, editVariableSchema.parse(options));
    }
}
