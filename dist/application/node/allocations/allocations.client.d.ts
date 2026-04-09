import type HttpClient from '../../../class/HttpClient.js';
import type { BaseListArgs, IP } from '../../../types.js';
import type { ApplicationAllocationList, ApplicationAllocationListWithDate, CreateApplicationAllocationArgs } from './allocations.types.js';
export default class AllocationClient {
    private httpClient;
    readonly node: number;
    constructor(httpClient: HttpClient, node: number);
    list(options?: {
        filter?: {
            ip?: IP | undefined;
            port?: string | number | undefined;
        } | undefined;
    } & BaseListArgs): Promise<ApplicationAllocationListWithDate>;
    create(options: CreateApplicationAllocationArgs): Promise<ApplicationAllocationList>;
}
//# sourceMappingURL=allocations.client.d.ts.map