import type { BaseFetchOptions, Paginated } from '../../types.js';
import type { CreateServerPayload, ListServersOptions, ApplicationServerIds } from './server.types.js';
import { Server } from './server.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class ServerManager extends BaseCacheManager<number | string, Server> {
    private httpClient;
    private databasesTtl;
    constructor(httpClient: HttpClient, cacheTtl?: number, databasesTtl?: number);
    list(options?: ListServersOptions): Promise<Paginated<Server>>;
    fetch(server: ApplicationServerIds, options?: BaseFetchOptions): Promise<Server>;
    resolve(server: number | string): Server;
    create(payload: CreateServerPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<Server>;
}
//# sourceMappingURL=server.manager.d.ts.map