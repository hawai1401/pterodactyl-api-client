import type { HttpClient } from '../../class/HttpClient.js';
import type { CreateNodePayload, Node } from '../nodes/nodes.types.js';
import type { NodeConfiguration } from './node.types.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { AllocationClient } from './allocation/allocation.client.js';
export declare class NodeClient {
    private httpClient;
    allocations: AllocationsClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    allocation(id: number): AllocationClient;
    fetch(): Promise<Node>;
    edit(payload: CreateNodePayload): Promise<Node>;
    configuration(): Promise<NodeConfiguration>;
    delete(): Promise<NodeConfiguration>;
}
//# sourceMappingURL=node.client.d.ts.map