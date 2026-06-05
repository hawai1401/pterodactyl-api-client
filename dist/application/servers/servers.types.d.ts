import type { BasePayload, EnvironmentVariable, PaginationFetchOptions, Sort } from '../../types.js';
export interface FetchApplicationServersOptions extends PaginationFetchOptions {
    filter?: {
        uuid?: string | undefined;
        uuidShort?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        external_id?: string | undefined;
    };
    sort?: {
        id?: Sort | undefined;
        uuid?: Sort | undefined;
    };
}
export type Status = 'suspended' | 'installing' | null;
export interface ApplicationServerObject<ServerStatus extends Status = Status> {
    object: 'server';
    attributes: {
        id: number;
        external_id: null | string;
        uuid: string;
        identifier: string;
        name: string;
        description: string;
        suspended: ServerStatus extends 'suspended' ? true : false;
        limits: {
            memory: number;
            swap: number;
            disk: number;
            io: number;
            cpu: number;
            threads: string | null;
            oom_disabled: boolean;
        };
        feature_limits: {
            databases: number;
            allocations: number;
            backups: number;
        };
        user: number;
        node: number;
        allocation: number;
        nest: number;
        egg: number;
        container: {
            startup_command: string;
            image: string;
            environment: Record<EnvironmentVariable, string | number>;
            installed: ServerStatus extends 'installing' ? 0 : 1;
        };
        updated_at: Date;
        created_at: Date;
    };
}
export interface ApplicationServer<ServerStatus extends Status = Status> {
    id: number;
    externalId: null | string;
    uuid: string;
    identifier: string;
    name: string;
    description: string;
    suspended: ServerStatus extends 'suspended' ? true : false;
    limits: {
        memory: number;
        swap: number;
        disk: number;
        io: number;
        cpu: number;
        threads: string | null;
        oomDisabled: boolean;
    };
    featureLimits: {
        databases: number;
        allocations: number;
        backups: number;
    };
    user: number;
    node: number;
    allocation: number;
    nest: number;
    egg: number;
    container: {
        startupCommand: string;
        image: string;
        environment: Record<EnvironmentVariable, string | number>;
        installed: ServerStatus extends 'installing' ? 0 : 1;
    };
    updatedAt: Date;
    createdAt: Date;
}
export interface ApplicationServerLimits {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    threads?: string | undefined;
    cpu: number;
    oom_disabled?: boolean | undefined;
}
export interface ApplicationServerFeatureLimits {
    databases: number;
    backups: number;
    allocations?: number | undefined;
}
export interface CreateServerPayload extends BasePayload {
    external_id?: string | undefined;
    name: string;
    description?: string | undefined;
    user: number;
    egg: number;
    docker_image: string;
    startup: string;
    environment: Record<EnvironmentVariable, string>;
    skip_scripts?: boolean | undefined;
    limits: ApplicationServerLimits;
    feature_limits: ApplicationServerFeatureLimits;
    allocation: {
        default: number;
        additional?: number[] | undefined;
    };
    start_on_completion?: boolean | undefined;
}
//# sourceMappingURL=servers.types.d.ts.map