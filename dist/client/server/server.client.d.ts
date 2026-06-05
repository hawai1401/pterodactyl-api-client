import { HttpClient } from '../../class/HttpClient.js';
import type { Paginated } from '../../types.js';
import { AllocationClient } from './allocation/allocation.client.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { BackupClient } from './backup/backup.client.js';
import { BackupsClient } from './backups/backups.client.js';
import { ConsoleClient } from './console/console.client.js';
import { DatabaseClient } from './database/database.client.js';
import { DatabasesClient } from './databases/databases.client.js';
import { ImageClient } from './image/image.client.js';
import { PowerClient } from './power/power.client.js';
import { ResourceClient } from './resource/resource.client.js';
import { ScheduleClient } from './schedule/schedule.client.js';
import { SchedulesClient } from './schedules/schedules.client.js';
import type { SetUserServerDetailsPayload, ServerEvent, FetchUserServerActivityLogsOptions, ActivityLog } from './server.types.js';
import { StartupClient } from './startup/startup.client.js';
import { SubuserClient } from './subuser/subuser.client.js';
import { SubusersClient } from './subusers/subusers.client.js';
export declare class UserServerClient {
    private httpClient;
    readonly panelUrl: URL;
    allocations: AllocationsClient;
    backups: BackupsClient;
    console: ConsoleClient;
    databases: DatabasesClient;
    image: ImageClient;
    power: PowerClient;
    resource: ResourceClient;
    schedules: SchedulesClient;
    startup: StartupClient;
    subusers: SubusersClient;
    readonly id: string;
    constructor(httpClient: HttpClient, panelUrl: URL, id: string);
    fetchActivityLogs<Event extends ServerEvent>(options?: FetchUserServerActivityLogsOptions<Event>): Promise<Paginated<ActivityLog<Event>>>;
    allocation(allocation: number): AllocationClient;
    backup(backup: string): BackupClient;
    database(database: string): DatabaseClient;
    schedule(schedule: number): ScheduleClient;
    subuser(subuser: string): SubuserClient;
    fetch(): Promise<{
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
        meta: {
            isServerOwner: boolean;
            userPermissions: import("./server.types.js").ServerPermissions[];
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
        meta: {
            isServerOwner: boolean;
            userPermissions: import("./server.types.js").ServerPermissions[];
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
        meta: {
            isServerOwner: boolean;
            userPermissions: import("./server.types.js").ServerPermissions[];
        };
    }>;
    setDetails(payload: SetUserServerDetailsPayload): Promise<void>;
    reinstall(): Promise<void>;
}
//# sourceMappingURL=server.client.d.ts.map