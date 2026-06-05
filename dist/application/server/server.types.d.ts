import type { BasePayload, EnvironmentVariable } from '../../types.js';
export interface ApplicationServerId {
    id?: number | undefined;
    external_id?: string | undefined;
}
export interface EditApplicationServerDetailsPayload extends BasePayload {
    name: string;
    user: number;
    external_id?: string | undefined;
    description?: string | undefined;
}
export interface EditApplicationServerConfigurationPayload extends BasePayload {
    allocation: number;
    oom_disabled?: boolean | undefined;
    limits: {
        memory?: number | undefined;
        swap?: number | undefined;
        disk?: number | undefined;
        io?: number | undefined;
        threads?: string | undefined;
        cpu?: number | undefined;
    };
    feature_limits: {
        databases: number;
        backups: number;
        allocations?: number | undefined;
    };
    add_allocations?: number[] | undefined;
    remove_allocations?: number[] | undefined;
}
export interface EditApplicationServerStartupPayload extends BasePayload {
    startup: string;
    environment: Record<EnvironmentVariable, string>;
    egg: number;
    image: string;
    skip_scripts: boolean;
}
export interface EditApplicationServerPayload extends BasePayload {
    details?: EditApplicationServerDetailsPayload | undefined;
    configuration?: EditApplicationServerConfigurationPayload | undefined;
    startup?: EditApplicationServerStartupPayload | undefined;
}
//# sourceMappingURL=server.types.d.ts.map