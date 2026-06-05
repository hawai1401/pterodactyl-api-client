import type { HttpClient } from '../../../class/HttpClient.js';
import type { Paginated } from '../../../types.js';
import type { CreateApplicationAllocationPayload, ApplicationAllocation, FetchAllocationsOptions } from './allocations.types.js';
export declare class AllocationsClient {
    private httpClient;
    readonly node: number;
    constructor(httpClient: HttpClient, node: number);
    fetch(options?: FetchAllocationsOptions): Promise<Paginated<ApplicationAllocation>>;
    create(payload: CreateApplicationAllocationPayload): Promise<{
        object: "list";
        data: {
            object: "allocation";
            attributes: {
                id: number;
                ip: `${number}.${number}.${number}.${number}`;
                alias: string | null;
                port: number;
                notes: string | null;
                assigned: boolean;
            };
        }[];
    }>;
}
//# sourceMappingURL=allocations.client.d.ts.map