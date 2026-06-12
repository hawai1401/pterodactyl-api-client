import {
  removeManagerCacheSymbol,
  getManagerCacheSymbol,
  setManagerCacheSymbol,
} from '../symbols.js';
import type { DataKeys } from '../types.js';

export abstract class BaseCacheManager<
  Key extends string | number,
  Instance extends object,
> {
  public cache: Map<Key, { instance: Instance; updatedAt: Date }>;
  protected propertyKeys: DataKeys<Instance>[];

  constructor(
    readonly cacheTtl: number,
    ...propertyKeys: typeof this.propertyKeys
  ) {
    this.cache = new Map();
    this.propertyKeys = propertyKeys;
  }

  protected setCache(instance: Instance, cache: boolean | undefined): Instance {
    if (cache)
      for (const propertyKey of this.propertyKeys.filter(
        (key) => instance[key],
      ))
        this.cache.set(instance[propertyKey] as Key, {
          instance,
          updatedAt: new Date(),
        });

    return instance;
  }

  [setManagerCacheSymbol](
    instance: Instance,
    cache: boolean | undefined,
  ): Instance {
    return this.setCache(instance, cache);
  }

  protected getCache(key: Key): Instance | null {
    const cacheValue = this.cache.get(key);
    if (!cacheValue) return null;
    if (Date.now() > cacheValue.updatedAt.getTime() + this.cacheTtl) {
      this.cache.delete(key);
      return null;
    }
    return cacheValue.instance;
  }

  [getManagerCacheSymbol](key: Key): Instance | null {
    return this.getCache(key);
  }

  protected removeCache(key: Key): void {
    this.cache.delete(key);
  }

  [removeManagerCacheSymbol](key: Key): void {
    this.removeCache(key);
  }
}
