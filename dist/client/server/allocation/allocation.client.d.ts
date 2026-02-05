import type HttpClient from "../../../class/HttpClient.js";
import type { Allocation } from "../server.types.js";
import type { AllocationList, AssignAllocationArgs, EditAllocationArgs } from "./allocation.types.js";
export default class AllocationClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(id: string): Promise<AllocationList>;
    assign(id: string, options: AssignAllocationArgs): Promise<Allocation>;
    setPrimary(id: string, allocation: number): Promise<Allocation>;
    edit(id: string, allocation: number, options?: EditAllocationArgs): Promise<Allocation>;
    delete(id: string, allocation: number): Promise<void>;
}
//# sourceMappingURL=allocation.client.d.ts.map