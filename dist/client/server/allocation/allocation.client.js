import { allocationId, updateAllocationSchema } from '../server.schemas.js';
export class AllocationClient {
    httpClient;
    server;
    allocation;
    constructor(httpClient, server, allocation) {
        this.httpClient = httpClient;
        this.server = server;
        this.allocation = allocationId.parse(allocation);
    }
    async setPrimary() {
        const allocationObject = await this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations/${this.allocation}/primary`);
        return allocationObject.attributes;
    }
    async setNote(payload) {
        const allocationObject = await this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations/${this.allocation}`, updateAllocationSchema.parse(payload));
        return allocationObject.attributes;
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/network/allocations/${this.allocation}`);
    }
}
