import type HttpClient from '../../class/HttpClient.js';
import type { CreateServerArgs } from './servers.types.js';
import type { BaseListArgs, Sort } from '../../types.js';
export default class ServersClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(options?: {
        filter?: {
            uuid?: string | undefined;
            uuidShort?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_id?: string | undefined;
        } | undefined;
        sort?: {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
        } | undefined;
    } & BaseListArgs): Promise<{
        data: ({
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
        })[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    create(options: CreateServerArgs): Promise<{
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
}
//# sourceMappingURL=servers.client.d.ts.map