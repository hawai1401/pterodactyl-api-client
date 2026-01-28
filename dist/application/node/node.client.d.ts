import type HttpClient from "../../class/HttpClient.js";
import AllocationClient from "./allocation/allocation.client.js";
import type { CreateNodeArgs, Node, NodeConfiguration } from "./node.types.js";
export default class NodeClient {
    private httpClient;
    allocation: AllocationClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        date: {
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
                scheme: import("./node.types.js").Scheme;
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
        }[];
        data: Node<string>[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    info(id: number): Promise<{
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
            scheme: import("./node.types.js").Scheme;
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
    create(options: CreateNodeArgs): Promise<{
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
            scheme: import("./node.types.js").Scheme;
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
    edit(id: number, options: CreateNodeArgs): Promise<{
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
            scheme: import("./node.types.js").Scheme;
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
    configuration(id: number): Promise<NodeConfiguration>;
    delete(id: number): Promise<NodeConfiguration>;
}
//# sourceMappingURL=node.client.d.ts.map