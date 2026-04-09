import { assignAllocationSchema } from '../server.schemas.js';
export default class AllocationsClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    list() {
        return this.httpClient.request('GET', `/client/servers/${this.server}/network/allocations`);
    }
    assign(options) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations`, assignAllocationSchema.parse(options));
    }
}
