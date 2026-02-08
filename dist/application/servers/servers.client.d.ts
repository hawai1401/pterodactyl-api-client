import type HttpClient from "../../class/HttpClient.js";
import type { CreateServerArgs } from "./servers.types.js";
export default class ServersClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    create(options: CreateServerArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            server_owner: boolean;
            identifier: string;
            internal_id: number;
            uuid: string;
            name: string;
            is_node_under_maintenance: boolean;
            description: string;
            status: null;
            is_suspended: boolean;
            is_installing: boolean;
            is_transferring: boolean;
            node: string;
            sftp_details: {
                ip: string;
                port: number;
            };
            invocation: string;
            docker_image: string;
            egg_features: string[];
            feature_limits: {
                databases: number;
                allocations: number;
                backups: number;
            };
            user_permissions: import("../../client/server/server.types.js").ServerPermissions[];
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
                oom_disabled: boolean;
            };
            relationships: {
                allocations: {
                    object: "list";
                    data: import("../../client/server/server.types.js").Allocation[];
                };
                variables: {
                    object: "list";
                    data: import("../../client/server/server.types.js").EggVariable[];
                };
            };
        };
        object: "server";
    }>;
}
//# sourceMappingURL=servers.client.d.ts.map