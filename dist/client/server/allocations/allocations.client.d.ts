import type HttpClient from '../../../class/HttpClient.js';
import type { Allocation } from '../server.types.js';
import type { AllocationList, AssignAllocationArgs } from '../allocation.types.js';
export default class AllocationsClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    list(): Promise<AllocationList>;
    assign(options: AssignAllocationArgs): Promise<Allocation>;
}
//# sourceMappingURL=allocations.client.d.ts.map