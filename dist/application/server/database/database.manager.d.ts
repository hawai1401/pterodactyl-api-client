import type { BaseFetchOptions } from '../../../types.js';
import type { CreateApplicationDatabase as CreateApplicationDatabasePayload } from './database.types.js';
import { ServerDatabase } from './database.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export declare class ServerDatabaseManager extends BaseCacheManager<number, ServerDatabase> {
    private httpClient;
    readonly serverId: number;
    constructor(httpClient: HttpClient, serverId: number, cacheTtl?: number);
    list(options?: Omit<BaseFetchOptions, 'force'>): Promise<ServerDatabase[]>;
    fetch(id: number, options?: BaseFetchOptions): Promise<ServerDatabase>;
    resolve(id: number): ServerDatabase;
    create(payload: CreateApplicationDatabasePayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<ServerDatabase>;
}
//# sourceMappingURL=database.manager.d.ts.map