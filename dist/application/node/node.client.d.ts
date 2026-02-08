import type HttpClient from "../../class/HttpClient.js";
import type { CreateNodeArgs } from "../nodes/nodes.types.js";
import type { NodeConfiguration } from "./node.types.js";
import AllocationsClient from "./allocations/allocations.client.js";
import AllocationClient from "./allocation/allocation.client.js";
export default class NodeClient {
    private httpClient;
    allocations: AllocationsClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    allocation(id: number): AllocationClient;
    info(): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            public: boolean;
            name: string;
            description: string;
            location_id: number;
            fqdn: string;
            scheme: import("../nodes/nodes.types.js").Scheme;
            behind_proxy: boolean;
            maintenance_mode: boolean;
            memory: number;
            memory_overallocate: number;
            disk: number;
            disk_overallocate: number;
            upload_size: number;
            daemon_listen: number;
            daemon_sftp: number;
            daemon_base: string;
            allocated_resources: {
                memory: number;
                disk: number;
            };
        };
        object: "node";
    }>;
    edit(options: CreateNodeArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            public: boolean;
            name: string;
            description: string;
            location_id: number;
            fqdn: string;
            scheme: import("../nodes/nodes.types.js").Scheme;
            behind_proxy: boolean;
            maintenance_mode: boolean;
            memory: number;
            memory_overallocate: number;
            disk: number;
            disk_overallocate: number;
            upload_size: number;
            daemon_listen: number;
            daemon_sftp: number;
            daemon_base: string;
            allocated_resources: {
                memory: number;
                disk: number;
            };
        };
        object: "node";
    }>;
    configuration(): Promise<NodeConfiguration>;
    delete(): Promise<NodeConfiguration>;
}
//# sourceMappingURL=node.client.d.ts.map