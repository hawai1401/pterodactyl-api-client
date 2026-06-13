import { nestId } from './nest.schemas.js';
import { Nest } from './nest.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class NestManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
    }
    async list(options) {
        const nestObjectList = await this.httpClient.request('GET', '/application/nests', { parseDates: true });
        return {
            data: nestObjectList.data.map((nestObject) => this.setCache(new Nest(this.httpClient, this, nestObject.attributes), options?.cache)),
            pagination: nestObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheNest = this.getCache(id);
        if (cacheNest && !options?.force)
            return cacheNest;
        const parsedId = nestId.parse(id);
        const nestObject = await this.httpClient.request('GET', `/application/nests/${parsedId}`, { parseDates: true });
        return this.setCache(new Nest(this.httpClient, this, nestObject.attributes), options?.cache);
    }
    resolve(id) {
        return (this.getCache(id) ??
            new Nest(this.httpClient, this, {
                id: nestId.parse(id),
            }));
    }
}
