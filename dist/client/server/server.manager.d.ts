import type { HttpClient } from '../../class/HttpClient.js';
import type { BaseFetchOptions, Paginated } from '../../types.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { ClientServer } from './server.class.js';
import type { FetchUserServersOptions } from '../client.types.js';
export declare class ClientServerManager extends BaseCacheManager<string, ClientServer> {
    private httpClient;
    readonly panelUrl: URL;
    constructor(httpClient: HttpClient, panelUrl: URL, cacheTtl?: number);
    list(options?: FetchUserServersOptions): Promise<Paginated<ClientServer>>;
    fetch(id: string, options?: BaseFetchOptions): Promise<ClientServer>;
    resolve(id: string): ClientServer;
}
//# sourceMappingURL=server.manager.d.ts.map