import type { BasePayload, EnvironmentVariable } from '../../types.js';
import type { ApplicationServerFeatureLimits, ApplicationServerLimits } from '../servers/servers.types.js';
export interface ApplicationServerId {
    id?: number | undefined;
    external_id?: string | undefined;
}
export interface SetApplicationServerDetailsPayload extends BasePayload {
    name: string;
    user: number;
    external_id?: string | undefined;
    description?: string | undefined;
}
export interface SetApplicationServerConfigurationPayload extends BasePayload {
    allocation: number;
    oom_disabled?: boolean | undefined;
    limits: Omit<ApplicationServerLimits, 'oom_disabled'>;
    feature_limits: ApplicationServerFeatureLimits;
    add_allocations?: number[] | undefined;
    remove_allocations?: number[] | undefined;
}
export interface SetApplicationServerStartupPayload extends BasePayload {
    startup: string;
    environment: Record<EnvironmentVariable, string>;
    egg: number;
    image: string;
    skip_scripts: boolean;
}
export interface UpdateApplicationServerPayload extends BasePayload {
    details?: SetApplicationServerDetailsPayload | undefined;
    configuration?: SetApplicationServerConfigurationPayload | undefined;
    startup?: SetApplicationServerStartupPayload | undefined;
}
//# sourceMappingURL=server.types.d.ts.map