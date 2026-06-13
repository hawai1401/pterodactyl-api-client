import type { HttpClient } from '../../../class/HttpClient.js';
import type { ApplicationServerDatabaseManager } from './database.manager.js';
import type { BaseApplicationDatabase } from './database.types.js';
import type { BaseFetchOptions } from '../../../types.js';
export declare class ApplicationServerDatabase {
    private httpClient;
    private databaseManager;
    id: number;
    server: number;
    host: number;
    database: string;
    username: string;
    remote: string;
    maxConnections: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(httpClient: HttpClient, databaseManager: ApplicationServerDatabaseManager, data: Partial<BaseApplicationDatabase> & Pick<BaseApplicationDatabase, 'id' | 'server'>);
    fetch(options?: BaseFetchOptions): Promise<this>;
    resetPassword(): Promise<void>;
    delete(): Promise<void>;
}
//# sourceMappingURL=database.class.d.ts.map