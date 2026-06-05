import { AccountClient } from './account/account.client.js';
import type { FetchUserServersOptions } from './client.types.js';
import { UserServerClient } from './server/server.client.js';
export declare class ClientAPI {
    private httpClient;
    readonly panelUrl: URL;
    account: AccountClient;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    fetchServers(options?: FetchUserServersOptions): Promise<{
        data: ({
            object: "server";
            attributes: {
                serverOwner: boolean;
                identifier: string;
                serverIdentifier: string;
                internalId: number;
                uuid: string;
                name: string;
                node: string;
                isNodeUnderMaintenance: boolean;
                sftpDetails: {
                    ip: string;
                    port: number;
                };
                description: string;
                limits: {
                    memory: number;
                    swap: number;
                    disk: number;
                    io: number;
                    cpu: number;
                    threads: string | null;
                    oomDisabled: boolean;
                };
                invocation: string;
                dockerImage: string;
                eggFeatures: Lowercase<string>[];
                featureLimits: {
                    databases: number;
                    allocations: number;
                    backups: number;
                };
                isTransferring: boolean;
                relationships: {
                    allocations: {
                        object: "list";
                        data: {
                            object: "allocation";
                            attributes: {
                                id: number;
                                ip: `${number}.${number}.${number}.${number}`;
                                ipAlias: string | null;
                                port: number;
                                notes: string | null;
                                isDefault: boolean;
                            };
                        }[];
                    };
                    variables: {
                        meta: {
                            startupCommand: string;
                            rawStartupCommand: string;
                            dockerImages: {
                                [x: Lowercase<string>]: string;
                            };
                        };
                        object: "list";
                        data: {
                            object: "egg_variable";
                            attributes: {
                                name: string;
                                description: string;
                                envVariable: Uppercase<string>;
                                defaultValue: string;
                                serverValue: string;
                                isEditable: boolean;
                                rules: string;
                            };
                        }[];
                    };
                };
                status: null;
                isInstalling: false;
                isSuspended: false;
            };
        } | {
            object: "server";
            attributes: {
                serverOwner: boolean;
                identifier: string;
                serverIdentifier: string;
                internalId: number;
                uuid: string;
                name: string;
                node: string;
                isNodeUnderMaintenance: boolean;
                sftpDetails: {
                    ip: string;
                    port: number;
                };
                description: string;
                limits: {
                    memory: number;
                    swap: number;
                    disk: number;
                    io: number;
                    cpu: number;
                    threads: string | null;
                    oomDisabled: boolean;
                };
                invocation: string;
                dockerImage: string;
                eggFeatures: Lowercase<string>[];
                featureLimits: {
                    databases: number;
                    allocations: number;
                    backups: number;
                };
                isTransferring: boolean;
                relationships: {
                    allocations: {
                        object: "list";
                        data: {
                            object: "allocation";
                            attributes: {
                                id: number;
                                ip: `${number}.${number}.${number}.${number}`;
                                ipAlias: string | null;
                                port: number;
                                notes: string | null;
                                isDefault: boolean;
                            };
                        }[];
                    };
                    variables: {
                        meta: {
                            startupCommand: string;
                            rawStartupCommand: string;
                            dockerImages: {
                                [x: Lowercase<string>]: string;
                            };
                        };
                        object: "list";
                        data: {
                            object: "egg_variable";
                            attributes: {
                                name: string;
                                description: string;
                                envVariable: Uppercase<string>;
                                defaultValue: string;
                                serverValue: string;
                                isEditable: boolean;
                                rules: string;
                            };
                        }[];
                    };
                };
                status: "installing";
                isInstalling: true;
                isSuspended: false;
            };
        } | {
            object: "server";
            attributes: {
                serverOwner: boolean;
                identifier: string;
                serverIdentifier: string;
                internalId: number;
                uuid: string;
                name: string;
                node: string;
                isNodeUnderMaintenance: boolean;
                sftpDetails: {
                    ip: string;
                    port: number;
                };
                description: string;
                limits: {
                    memory: number;
                    swap: number;
                    disk: number;
                    io: number;
                    cpu: number;
                    threads: string | null;
                    oomDisabled: boolean;
                };
                invocation: string;
                dockerImage: string;
                eggFeatures: Lowercase<string>[];
                featureLimits: {
                    databases: number;
                    allocations: number;
                    backups: number;
                };
                isTransferring: boolean;
                relationships: {
                    allocations: {
                        object: "list";
                        data: {
                            object: "allocation";
                            attributes: {
                                id: number;
                                ip: `${number}.${number}.${number}.${number}`;
                                ipAlias: string | null;
                                port: number;
                                notes: string | null;
                                isDefault: boolean;
                            };
                        }[];
                    };
                    variables: {
                        meta: {
                            startupCommand: string;
                            rawStartupCommand: string;
                            dockerImages: {
                                [x: Lowercase<string>]: string;
                            };
                        };
                        object: "list";
                        data: {
                            object: "egg_variable";
                            attributes: {
                                name: string;
                                description: string;
                                envVariable: Uppercase<string>;
                                defaultValue: string;
                                serverValue: string;
                                isEditable: boolean;
                                rules: string;
                            };
                        }[];
                    };
                };
                status: "suspended";
                isInstalling: false;
                isSuspended: true;
            };
        })[];
        meta: {
            pagination: {
                total: number;
                count: number;
                perPage: number;
                currentPage: number;
                totalPages: number;
                links: {
                    [x: Lowercase<string>]: string;
                };
            };
        };
        object: "list";
    }>;
    server(id: string): UserServerClient;
}
//# sourceMappingURL=client.class.d.ts.map