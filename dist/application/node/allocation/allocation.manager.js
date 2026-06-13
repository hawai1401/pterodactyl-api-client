import { listAllocationsFilterSchema, allocationId } from '../node.schemas.js';
import { NodeAllocation } from './allocation.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
import { buildQueryParams } from '../../../utils/buildQueryParams.js';
export class NodeAllocationManager extends BaseCacheManager {
    httpClient;
    nodeId;
    constructor(httpClient, nodeId, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.nodeId = nodeId;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: listAllocationsFilterSchema.optional().parse(options?.filter),
        });
        const allocationObjectList = await this.httpClient.request('GET', `/application/nodes/${this.nodeId}/allocations?${queries}`);
        return {
            data: allocationObjectList.data.map((allocationObject) => this.setCache(new NodeAllocation(this.httpClient, this, {
                ...allocationObject.attributes,
                node: this.nodeId,
            }), options?.cache)),
            pagination: allocationObjectList.meta.pagination,
        };
    }
    resolve(id) {
        return super.resolve(id, () => new NodeAllocation(this.httpClient, this, {
            id: allocationId.parse(id),
            node: this.nodeId,
        }));
    }
    async create(payload, options) {
        return (await this.httpClient.request('POST', `/application/nodes/${this.nodeId}/allocations`, payload)).data.map((allocationObject) => this.setCache(new NodeAllocation(this.httpClient, this, {
            ...allocationObject.attributes,
            node: this.nodeId,
        }), options?.cache));
    }
}
