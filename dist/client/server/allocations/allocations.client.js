import { assignAllocationSchema } from '../server.schemas.js';
export class AllocationsClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const allocationObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/network/allocations`);
        return allocationObjectList.data.map((allocationObject) => allocationObject.attributes);
    }
    async assign(payload) {
        const allocationObject = await this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations`, assignAllocationSchema.parse(payload));
        return allocationObject.attributes;
    }
}
