import type { HttpClient } from '../../../class/HttpClient.js';
import type { Allocation } from '../allocations/allocations.types.js';
import type { EditAllocationPayload } from './allocation.types.js';
export declare class AllocationClient {
    private httpClient;
    readonly server: string;
    readonly allocation: number;
    constructor(httpClient: HttpClient, server: string, allocation: number);
    setPrimary(): Promise<Allocation>;
    edit(payload: EditAllocationPayload): Promise<Allocation>;
    delete(): Promise<void>;
}
//# sourceMappingURL=allocation.client.d.ts.map