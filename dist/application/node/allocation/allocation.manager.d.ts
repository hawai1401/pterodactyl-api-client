import type { BaseFetchOptions, Paginated } from '../../../types.js';
import type { CreateApplicationAllocationPayload, ListAllocationsOptions } from './allocation.types.js';
import { NodeAllocation } from './allocation.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export declare class NodeAllocationManager extends BaseCacheManager<number, NodeAllocation> {
    private httpClient;
    readonly nodeId: number;
    constructor(httpClient: HttpClient, nodeId: number, cacheTtl?: number);
    list(options?: ListAllocationsOptions): Promise<Paginated<NodeAllocation>>;
    resolve(id: number): NodeAllocation;
    create(payload: CreateApplicationAllocationPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<NodeAllocation[]>;
}
//# sourceMappingURL=allocation.manager.d.ts.map