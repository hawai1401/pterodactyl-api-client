import type { BaseFetchOptions, NonMethodPartial, Paginated } from '../../types.js';
import type { CreateServerPayload, ListServersOptions, ApplicationServerIds } from './server.types.js';
import { ApplicationServer } from './server.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class ApplicationServerManager extends BaseCacheManager<number | string, ApplicationServer> {
    private httpClient;
    constructor(httpClient: HttpClient, cacheTtl?: number);
    list(options?: ListServersOptions): Promise<Paginated<ApplicationServer>>;
    fetch(server: ApplicationServerIds, options?: BaseFetchOptions): Promise<ApplicationServer>;
    resolve(server: number | string): ApplicationServer | (NonMethodPartial<ApplicationServer> & Pick<ApplicationServer, 'id' | 'externalId'>);
    create(payload: CreateServerPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<ApplicationServer>;
}
//# sourceMappingURL=server.manager.d.ts.map