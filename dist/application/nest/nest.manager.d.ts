import type { BaseFetchOptions, Paginated } from '../../types.js';
import type { NestId } from './nest.types.js';
import { Nest } from './nest.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class NestManager extends BaseCacheManager<NestId, Nest> {
    private httpClient;
    constructor(httpClient: HttpClient, cacheTtl?: number);
    list(options?: Omit<BaseFetchOptions, 'force'>): Promise<Paginated<Nest>>;
    fetch(id: NestId, options?: BaseFetchOptions): Promise<Nest>;
    resolve(id: NestId): Nest;
}
//# sourceMappingURL=nest.manager.d.ts.map