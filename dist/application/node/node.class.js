import { setManagerCacheSymbol, removeManagerCacheSymbol, } from '../../symbols.js';
import { createNodeSchema } from './node.schemas.js';
import { NodeAllocationManager } from './allocation/allocation.manager.js';
export class Node {
    httpClient;
    nodeManager;
    id;
    uuid;
    public;
    name;
    description;
    locationId;
    fqdn;
    scheme;
    behindProxy;
    maintenanceMode;
    memory;
    memoryOverallocate;
    disk;
    diskOverallocate;
    uploadSize;
    daemonListen;
    daemonSftp;
    daemonBase;
    createdAt;
    updatedAt;
    allocatedResources;
    allocations;
    constructor(httpClient, nodeManager, data, allocationsTtl) {
        this.httpClient = httpClient;
        this.nodeManager = nodeManager;
        Object.assign(this, data);
        this.allocations = new NodeAllocationManager(this.httpClient, this.id, allocationsTtl);
    }
    async fetch(options) {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nodes/${this.id}`, { parseDates: true })).attributes);
        this.nodeManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async update(payload, options) {
        Object.assign(this, (await this.httpClient.request('PATCH', `/application/nodes/${this.id}`, createNodeSchema.parse(payload), { parseDates: true })).attributes);
        this.nodeManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async configuration() {
        return this.httpClient.request('GET', `/application/nodes/${this.id}/configuration`);
    }
    async delete() {
        this.nodeManager[removeManagerCacheSymbol](this.id);
        await this.httpClient.request('DELETE', `/application/nodes/${this.id}`);
    }
}
