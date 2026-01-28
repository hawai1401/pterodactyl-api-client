import type HttpClient from "../../../class/HttpClient.js";
import type { ApplicationAllocationList, ApplicationAllocationListWithDate, CreateApplicationAllocationArgs } from "./allocation.types.js";
export default class AllocationClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(id: number): Promise<ApplicationAllocationListWithDate>;
    create(id: number, options: CreateApplicationAllocationArgs): Promise<ApplicationAllocationList>;
    delete(id: number, allocation: number): Promise<ApplicationAllocationList>;
}
//# sourceMappingURL=allocation.client.d.ts.map