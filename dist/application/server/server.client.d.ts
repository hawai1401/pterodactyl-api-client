import type HttpClient from '../../class/HttpClient.js';
import DatabaseClient from './database/database.client.js';
import type { ApplicationServerId, EditApplicationServerArgs } from './server.types.js';
import DatabasesClient from './databases/databases.client.js';
export default class ServerClient {
    private httpClient;
    databases: DatabasesClient;
    readonly id: number | undefined;
    readonly external_id: string | undefined;
    constructor(httpClient: HttpClient, args: ApplicationServerId);
    database(database: number): DatabaseClient;
    info(): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 0;
            };
            status: "suspended";
        } | {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 1;
            };
            status: "installing" | null;
        };
        object: "server";
    } | {
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 0;
            };
            status: "suspended";
        } | {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 1;
            };
            status: "installing" | null;
        };
        object: "server";
    }>;
    edit({ details, configuration, startup }: EditApplicationServerArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 0;
            };
            status: "suspended";
        } | {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 1;
            };
            status: "installing" | null;
        };
        object: "server";
    } | {
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 0;
            };
            status: "suspended";
        } | {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            suspended: boolean;
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
                environment: Record<import("../../types.js").EnvironmentVariable, string | number>;
            } & {
                installed: 1;
            };
            status: "installing" | null;
        };
        object: "server";
    }>;
    suspend(): Promise<void>;
    unsuspend(): Promise<void>;
    reinstall(): Promise<void>;
    delete(force?: boolean | undefined): Promise<void>;
}
//# sourceMappingURL=server.client.d.ts.map