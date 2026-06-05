import type { HttpClient } from '../../../class/HttpClient.js';
import type { Allocation, AssignAllocationPayload } from './allocations.types.js';
export declare class AllocationsClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<Allocation[]>;
    assign(payload: AssignAllocationPayload): Promise<Allocation>;
}
//# sourceMappingURL=allocations.client.d.ts.map