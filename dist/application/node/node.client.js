import { allocationId, nodeId } from './node.schemas.js';
import { createNodeSchema } from '../nodes/nodes.schemas.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { AllocationClient } from './allocation/allocation.client.js';
export class NodeClient {
    httpClient;
    allocations;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = nodeId.parse(id);
        this.allocations = new AllocationsClient(httpClient, this.id);
    }
    allocation(id) {
        return new AllocationClient(this.httpClient, this.id, allocationId.parse(id));
    }
    async fetch() {
        const nodeObject = await this.httpClient.request('GET', `/application/nodes/${this.id}`, { parseDates: true });
        return nodeObject.attributes;
    }
    async update(payload) {
        const nodeObject = await this.httpClient.request('PATCH', `/application/nodes/${this.id}`, createNodeSchema.parse(payload), { parseDates: true });
        return nodeObject.attributes;
    }
    configuration() {
        return this.httpClient.request('GET', `/application/nodes/${this.id}/configuration`);
    }
    delete() {
        return this.httpClient.request('DELETE', `/application/nodes/${this.id}`);
    }
}
