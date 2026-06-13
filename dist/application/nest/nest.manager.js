import { nestId } from './nest.schemas.js';
import { Nest } from './nest.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class NestManager extends BaseCacheManager {
    httpClient;
    eggsTtl;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5, eggsTtl) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.eggsTtl = eggsTtl;
    }
    async list(options) {
        const nestObjectList = await this.httpClient.request('GET', '/application/nests', { parseDates: true });
        return {
            data: nestObjectList.data.map((nestObject) => this.setCache(new Nest(this.httpClient, this, nestObject.attributes, this.eggsTtl), options?.cache)),
            pagination: nestObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheNest = this.getCache(id);
        if (cacheNest && !options?.force)
            return cacheNest;
        return this.setCache(new Nest(this.httpClient, this, (await this.httpClient.request('GET', `/application/nests/${nestId.parse(id)}`, { parseDates: true })).attributes, this.eggsTtl), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new Nest(this.httpClient, this, {
            id: nestId.parse(id),
        }, this.eggsTtl));
    }
}
