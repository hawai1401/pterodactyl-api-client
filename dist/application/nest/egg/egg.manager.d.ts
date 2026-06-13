import type { BaseFetchOptions } from '../../../types.js';
import type { EggId } from './egg.types.js';
import { Egg } from './egg.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export declare class EggManager extends BaseCacheManager<EggId, Egg> {
    private httpClient;
    readonly nestId: number;
    constructor(httpClient: HttpClient, nestId: number, cacheTtl?: number);
    list(options?: Omit<BaseFetchOptions, 'force'>): Promise<Egg[]>;
    fetch(id: EggId, options?: BaseFetchOptions): Promise<Egg>;
    resolve(id: EggId): Egg;
}
//# sourceMappingURL=egg.manager.d.ts.map