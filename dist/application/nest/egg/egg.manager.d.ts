import type { BaseFetchOptions, NonMethodPartial } from '../../../types.js';
import type { EggId } from './egg.types.js';
import { ApplicationEgg } from './egg.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export declare class ApplicationEggManager extends BaseCacheManager<EggId, ApplicationEgg> {
    private httpClient;
    readonly nestId: number;
    constructor(httpClient: HttpClient, nestId: number, cacheTtl?: number);
    list(options?: Omit<BaseFetchOptions, 'force'>): Promise<ApplicationEgg[]>;
    fetch(id: EggId, options?: BaseFetchOptions): Promise<ApplicationEgg>;
    resolve(id: EggId): ApplicationEgg | (NonMethodPartial<ApplicationEgg> & Pick<ApplicationEgg, 'id'>);
}
//# sourceMappingURL=egg.manager.d.ts.map