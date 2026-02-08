import type HttpClient from "../../class/HttpClient.js";
import type { CreateNodeArgs } from "./nodes.types.js";
export default class NodesClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
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
                scheme: import("./nodes.types.js").Scheme;
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
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
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
            scheme: import("./nodes.types.js").Scheme;
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
}
//# sourceMappingURL=nodes.client.d.ts.map