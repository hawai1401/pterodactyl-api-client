import type { HttpClient } from '../../class/HttpClient.js';
import type { ApplicationServerManager } from './server.manager.js';
import { ApplicationServerDatabaseManager } from './database/database.manager.js';
import type { BaseApplicationServer, UpdateApplicationServerPayload, Status } from './server.types.js';
import type { BaseFetchOptions } from '../../types.js';
export declare class ApplicationServer<ServerStatus extends Status = Status> {
    private httpClient;
    private serverManager;
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
        environment: Record<string, string | number>;
        installed: ServerStatus extends 'installing' ? 0 : 1;
    };
    updatedAt: Date;
    createdAt: Date;
    databases: ApplicationServerDatabaseManager;
    constructor(httpClient: HttpClient, serverManager: ApplicationServerManager, data: Partial<BaseApplicationServer> & (Pick<BaseApplicationServer, 'id'> | Pick<BaseApplicationServer, 'externalId'>));
    fetch(options?: BaseFetchOptions): Promise<this>;
    update(payload: UpdateApplicationServerPayload, options?: Omit<BaseFetchOptions, 'force'>): Promise<this>;
    suspend(): Promise<void>;
    unsuspend(): Promise<void>;
    reinstall(): Promise<void>;
    delete(force?: boolean): Promise<void>;
}
//# sourceMappingURL=server.class.d.ts.map