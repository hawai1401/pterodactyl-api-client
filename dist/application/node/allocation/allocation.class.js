import { removeManagerCacheSymbol } from '../../../symbols.js';
export class NodeAllocation {
    httpClient;
    allocationManager;
    id;
    ip;
    alias;
    port;
    notes;
    assigned;
    node;
    constructor(httpClient, allocationManager, data) {
        this.httpClient = httpClient;
        this.allocationManager = allocationManager;
        Object.assign(this, data);
    }
    async delete() {
        this.allocationManager[removeManagerCacheSymbol](this.id);
        await this.httpClient.request('DELETE', `/application/nodes/${this.node}/allocations/${this.id}`);
    }
}
