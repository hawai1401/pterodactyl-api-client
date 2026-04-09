import type HttpClient from '../../class/HttpClient.js';
import type { CreateUserArgs, User, UserAttributes, UserWithServersAttributes } from './users.types.js';
import type { BaseListArgs, Sort } from '../../types.js';
export default class UsersClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends boolean | undefined>(options?: {
        includeServers?: T | undefined;
        filter?: {
            uuid?: string | undefined;
            username?: string | undefined;
            email?: string | undefined;
            external_id?: string | undefined;
        } | undefined;
        sort?: {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
        } | undefined;
    } & BaseListArgs): Promise<{
        data: {
            attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
                created_at: Date;
                updated_at: Date;
                relationships: {
                    servers: {
                        length: number;
                        toString(): string;
                        toLocaleString(): string;
                        toLocaleString(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
                        pop(): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | undefined;
                        push(...items: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]): number;
                        concat(...items: ConcatArray<{
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>[]): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        concat(...items: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | ConcatArray<{
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>)[]): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        join(separator?: string): string;
                        reverse(): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        shift(): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | undefined;
                        slice(start?: number, end?: number): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        sort(compareFn?: ((a: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, b: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }) => number) | undefined): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        splice(start: number, deleteCount?: number): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        splice(start: number, deleteCount: number, ...items: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        unshift(...items: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]): number;
                        indexOf(searchElement: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, fromIndex?: number): number;
                        lastIndexOf(searchElement: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, fromIndex?: number): number;
                        every<S extends {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => value is S, thisArg?: any): this is S[];
                        every(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): boolean;
                        some(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): boolean;
                        forEach(callbackfn: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => void, thisArg?: any): void;
                        map<U>(callbackfn: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => U, thisArg?: any): U[];
                        filter<S extends {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => value is S, thisArg?: any): S[];
                        filter(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        reduce(callbackfn: (previousValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        };
                        reduce(callbackfn: (previousValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, initialValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        };
                        reduce<U>(callbackfn: (previousValue: U, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => U, initialValue: U): U;
                        reduceRight(callbackfn: (previousValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        };
                        reduceRight(callbackfn: (previousValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, initialValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        };
                        reduceRight<U>(callbackfn: (previousValue: U, currentValue: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, currentIndex: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => U, initialValue: U): U;
                        find<S extends {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, obj: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => value is S, thisArg?: any): S | undefined;
                        find(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, obj: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | undefined;
                        findIndex(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, obj: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): number;
                        fill(value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, start?: number, end?: number): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        copyWithin(target: number, start: number, end?: number): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        entries(): ArrayIterator<[number, {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }]>;
                        keys(): ArrayIterator<number>;
                        values(): ArrayIterator<{
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>;
                        includes(searchElement: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, fromIndex?: number): boolean;
                        flatMap<U, This = undefined>(callback: (this: This, value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => U | readonly U[], thisArg?: This | undefined): U[];
                        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
                        at(index: number): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | undefined;
                        findLast<S extends {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => value is S, thisArg?: any): S | undefined;
                        findLast(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | undefined;
                        findLastIndex(predicate: (value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, index: number, array: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]) => unknown, thisArg?: any): number;
                        toReversed(): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        toSorted(compareFn?: ((a: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }, b: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }) => number) | undefined): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        toSpliced(start: number, deleteCount: number, ...items: ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[]): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        toSpliced(start: number, deleteCount?: number): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        with(index: number, value: {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }): ({
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        })[];
                        [Symbol.iterator](): ArrayIterator<{
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        } | {
                            attributes: {
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
                                updated_at: string;
                                created_at: string;
                                status: "suspended";
                            } | {
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
                                updated_at: string;
                                created_at: string;
                                status: "installing" | null;
                            };
                            object: "server";
                        }>;
                        [Symbol.unscopables]: {
                            [x: number]: boolean | undefined;
                            length?: boolean;
                            toString?: boolean;
                            toLocaleString?: boolean;
                            pop?: boolean;
                            push?: boolean;
                            concat?: boolean;
                            join?: boolean;
                            reverse?: boolean;
                            shift?: boolean;
                            slice?: boolean;
                            sort?: boolean;
                            splice?: boolean;
                            unshift?: boolean;
                            indexOf?: boolean;
                            lastIndexOf?: boolean;
                            every?: boolean;
                            some?: boolean;
                            forEach?: boolean;
                            map?: boolean;
                            filter?: boolean;
                            reduce?: boolean;
                            reduceRight?: boolean;
                            find?: boolean;
                            findIndex?: boolean;
                            fill?: boolean;
                            copyWithin?: boolean;
                            entries?: boolean;
                            keys?: boolean;
                            values?: boolean;
                            includes?: boolean;
                            flatMap?: boolean;
                            flat?: boolean;
                            at?: boolean;
                            findLast?: boolean;
                            findLastIndex?: boolean;
                            toReversed?: boolean;
                            toSorted?: boolean;
                            toSpliced?: boolean;
                            with?: boolean;
                            [Symbol.iterator]?: boolean;
                            readonly [Symbol.unscopables]?: boolean;
                        };
                        object: "list";
                        data: import("../servers/servers.types.js").ApplicationServer<string>[];
                    };
                } | undefined;
            };
            object: "user";
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    create(args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
}
//# sourceMappingURL=users.client.d.ts.map