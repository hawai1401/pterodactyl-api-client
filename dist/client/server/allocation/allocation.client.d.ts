import type HttpClient from '../../../class/HttpClient.js';
import type { Allocation } from '../server.types.js';
import type { EditAllocationArgs } from '../allocation.types.js';
export default class AllocationClient {
    private httpClient;
    readonly server: string;
    readonly allocation: number;
    constructor(httpClient: HttpClient, server: string, allocation: number);
    setPrimary(): Promise<Allocation>;
    edit(options?: EditAllocationArgs): Promise<Allocation>;
    delete(): Promise<void>;
}
//# sourceMappingURL=allocation.client.d.ts.map