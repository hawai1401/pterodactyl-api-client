import { nestEggId } from '../nest.schemas.js';
import { ApplicationEgg } from './egg.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export class ApplicationEggManager extends BaseCacheManager {
    httpClient;
    nestId;
    constructor(httpClient, nestId, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.nestId = nestId;
    }
    async list(options) {
        const res = await this.httpClient.request('GET', `/application/nests/${this.nestId}/eggs`, { parseDates: true });
        return res.data.map((eggObject) => this.setCache(new ApplicationEgg(this.httpClient, this, eggObject.attributes), options?.cache));
    }
    async fetch(id, options) {
        const cacheEgg = this.getCache(id);
        if (cacheEgg && !options?.force)
            return cacheEgg;
        const parsedId = nestEggId.parse(id);
        const eggObject = await this.httpClient.request('GET', `/application/nests/${this.nestId}/eggs/${parsedId}`, { parseDates: true });
        return this.setCache(new ApplicationEgg(this.httpClient, this, eggObject.attributes), options?.cache);
    }
    resolve(id) {
        return (this.getCache(id) ??
            new ApplicationEgg(this.httpClient, this, {
                id: nestEggId.parse(id),
                nest: this.nestId,
            }));
    }
}
