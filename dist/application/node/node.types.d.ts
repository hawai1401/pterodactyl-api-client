import type { BaseArgs, IP, ListwithPagination } from "../../types.js";
export type Scheme = "https" | "http";
export interface Node<T extends string | Date> {
    object: "node";
    attributes: {
        id: number;
        uuid: string;
        public: boolean;
        name: string;
        description: string;
        location_id: number;
        fqdn: string;
        scheme: Scheme;
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
        created_at: T;
        updated_at: T;
        allocated_resources: {
            memory: number;
            disk: number;
        };
    };
}
export interface NodeList extends ListwithPagination {
    data: Node<string>[];
}
export interface CreateNodeArgs extends BaseArgs {
    name: string;
    description?: string | undefined;
    location_id: number;
    fqdn: string;
    scheme: Scheme;
    behind_proxy?: boolean | undefined;
    public?: boolean | undefined;
    daemon_base?: string | undefined;
    daemon_sftp: number;
    daemon_listen: number;
    memory: number;
    memory_overallocate: number;
    disk: number;
    disk_overallocate: number;
    upload_size?: number | undefined;
    maintenance_mode?: boolean | undefined;
}
export interface NodeConfiguration {
    debug: boolean;
    uuid: string;
    token_id: string;
    token: string;
    api: {
        host: IP;
        port: number;
        ssl: {
            enabled: boolean;
            cert: string;
            key: string;
        };
        upload_limit: number;
    };
    system: {
        data: string;
        sftp: {
            bind_port: number;
        };
    };
    allowed_mounts: [];
    remote: string;
}
//# sourceMappingURL=node.types.d.ts.map