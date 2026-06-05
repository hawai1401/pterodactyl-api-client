import type { BasePayload, PaginationFetchOptions, Sort } from '../../types.js';
export type Scheme = 'https' | 'http';
export interface FetchNodesOptions extends PaginationFetchOptions {
    filter?: {
        uuid?: string | undefined;
        name?: string | undefined;
        fqdn?: string | undefined;
        daemon_token_id?: string | undefined;
    };
    sort?: {
        id?: Sort | undefined;
        uuid?: Sort | undefined;
        memory?: Sort | undefined;
        disk?: Sort | undefined;
    };
}
export interface NodeObject {
    object: 'node';
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
        created_at: Date;
        updated_at: Date;
        allocated_resources: {
            memory: number;
            disk: number;
        };
    };
}
export interface Node {
    id: number;
    uuid: string;
    public: boolean;
    name: string;
    description: string;
    locationId: number;
    fqdn: string;
    scheme: Scheme;
    behindProxy: boolean;
    maintenanceMode: boolean;
    memory: number;
    memoryOverallocate: number;
    disk: number;
    diskOverallocate: number;
    uploadSize: number;
    daemonListen: number;
    daemonSftp: number;
    daemonBase: string;
    createdAt: Date;
    updatedAt: Date;
    allocatedResources: {
        memory: number;
        disk: number;
    };
}
export interface CreateNodePayload extends BasePayload {
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
//# sourceMappingURL=nodes.types.d.ts.map