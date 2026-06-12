import { removeManagerCacheSymbol, getManagerCacheSymbol, setManagerCacheSymbol, } from '../symbols.js';
export class BaseCacheManager {
    cacheTtl;
    cache;
    propertyKeys;
    constructor(cacheTtl, ...propertyKeys) {
        this.cacheTtl = cacheTtl;
        this.cache = new Map();
        this.propertyKeys = propertyKeys;
    }
    setCache(instance, cache) {
        if (cache)
            for (const propertyKey of this.propertyKeys.filter((key) => instance[key]))
                this.cache.set(instance[propertyKey], {
                    instance,
                    updatedAt: new Date(),
                });
        return instance;
    }
    [setManagerCacheSymbol](instance, cache) {
        return this.setCache(instance, cache);
    }
    getCache(key) {
        const cacheValue = this.cache.get(key);
        if (!cacheValue)
            return null;
        if (Date.now() > cacheValue.updatedAt.getTime() + this.cacheTtl) {
            this.cache.delete(key);
            return null;
        }
        return cacheValue.instance;
    }
    [getManagerCacheSymbol](key) {
        return this.getCache(key);
    }
    removeCache(key) {
        this.cache.delete(key);
    }
    [removeManagerCacheSymbol](key) {
        this.removeCache(key);
    }
}
