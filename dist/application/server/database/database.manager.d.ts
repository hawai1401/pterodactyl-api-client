import type { BaseFetchOptions, NonMethodPartial } from '../../../types.js';
import type { CreateApplicationDatabase as CreateApplicationDatabasePayload } from './database.types.js';
import { ApplicationServerDatabase } from './database.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export declare class ApplicationServerDatabaseManager extends BaseCacheManager<number, ApplicationServerDatabase> {
    private httpClient;
    readonly serverId: number;
    constructor(httpClient: HttpClient, serverId: number, cacheTtl?: number);
    list(options?: Omit<BaseFetchOptions, 'force'>): Promise<ApplicationServerDatabase[]>;
    fetch(id: number, options?: BaseFetchOptions): Promise<ApplicationServerDatabase>;
    resolve(id: number): ApplicationServerDatabase | (NonMethodPartial<ApplicationServerDatabase> & Pick<ApplicationServerDatabase, 'id'>);
    create(payload: CreateApplicationDatabasePayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<ApplicationServerDatabase>;
}
//# sourceMappingURL=database.manager.d.ts.map