import { nestEggId } from '../nest.schemas.js';
import { Egg } from './egg.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export class EggManager extends BaseCacheManager {
    httpClient;
    nestId;
    constructor(httpClient, nestId, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.nestId = nestId;
    }
    async list(options) {
        const res = await this.httpClient.request('GET', `/application/nests/${this.nestId}/eggs`, { parseDates: true });
        return res.data.map((eggObject) => this.setCache(new Egg(this.httpClient, this, eggObject.attributes), options?.cache));
    }
    async fetch(id, options) {
        const cacheEgg = this.getCache(id);
        if (cacheEgg && !options?.force)
            return cacheEgg;
        return this.setCache(new Egg(this.httpClient, this, (await this.httpClient.request('GET', `/application/nests/${this.nestId}/eggs/${nestEggId.parse(id)}`, { parseDates: true })).attributes), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new Egg(this.httpClient, this, {
            id: nestEggId.parse(id),
            nest: this.nestId,
        }));
    }
}
