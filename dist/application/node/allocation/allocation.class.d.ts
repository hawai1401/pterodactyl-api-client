import type { HttpClient } from '../../../class/HttpClient.js';
import type { NodeAllocationManager } from './allocation.manager.js';
import type { BaseApplicationAllocation } from './allocation.types.js';
import type { IPv4 } from '../../../types.js';
export declare class NodeAllocation {
    private httpClient;
    private allocationManager;
    id: number;
    ip: IPv4;
    alias: string | null;
    port: number;
    notes: string | null;
    assigned: boolean;
    node: number;
    constructor(httpClient: HttpClient, allocationManager: NodeAllocationManager, data: Partial<BaseApplicationAllocation> & Pick<BaseApplicationAllocation, 'id' | 'node'>);
    delete(): Promise<void>;
}
//# sourceMappingURL=allocation.class.d.ts.map