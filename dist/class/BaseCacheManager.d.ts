import { removeManagerCacheSymbol, getManagerCacheSymbol, setManagerCacheSymbol } from '../symbols.js';
import type { DataKeys } from '../types.js';
export declare abstract class BaseCacheManager<Key extends string | number, Instance extends object> {
    readonly cacheTtl: number;
    cache: Map<Key, {
        instance: Instance;
        updatedAt: Date;
    }>;
    protected propertyKeys: DataKeys<Instance>[];
    constructor(cacheTtl: number, ...propertyKeys: typeof this.propertyKeys);
    protected setCache(instance: Instance, cache: boolean | undefined): Instance;
    [setManagerCacheSymbol](instance: Instance, cache: boolean | undefined): Instance;
    protected getCache(key: Key): Instance | null;
    [getManagerCacheSymbol](key: Key): Instance | null;
    protected removeCache(key: Key): void;
    [removeManagerCacheSymbol](key: Key): void;
}
//# sourceMappingURL=BaseCacheManager.d.ts.map