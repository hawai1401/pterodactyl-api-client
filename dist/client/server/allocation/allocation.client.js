import { allocationId, editAllocationSchema } from '../server.schemas.js';
export default class AllocationClient {
    httpClient;
    server;
    allocation;
    constructor(httpClient, server, allocation) {
        this.httpClient = httpClient;
        this.server = server;
        this.allocation = allocationId.parse(allocation);
    }
    setPrimary() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations/${this.allocation}/primary`);
    }
    edit(options = {}) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/network/allocations/${this.allocation}`, editAllocationSchema.parse(options));
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/network/allocations/${this.allocation}`);
    }
}
