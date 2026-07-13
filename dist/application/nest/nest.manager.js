import { nestId } from './nest.schemas.js';
import { Nest } from './nest.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { Egg } from './egg/egg.class.js';
export class NestManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
    }
    async list(options) {
        const nestObjectList = await this.httpClient.request('GET', '/application/nests?include=eggs,eggs.variables', {
            parseDates: true,
        });
        return {
            data: nestObjectList.data.map((nestObject) => {
                const { relationships, ...attributes } = nestObject.attributes;
                return this.setCache(new Nest(this.httpClient, this, {
                    ...attributes,
                    eggs: relationships.eggs.data.map((eggObject) => {
                        const { relationships, ...attributes } = eggObject.attributes;
                        return new Egg(this.httpClient, {
                            ...attributes,
                            variables: relationships.variables.data.map((variableObject) => variableObject.attributes),
                        });
                    }),
                }), options?.cache);
            }),
            pagination: nestObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheNest = this.getCache(id);
        if (cacheNest && !options?.force)
            return cacheNest;
        return this.setCache(new Nest(this.httpClient, this, (await this.httpClient.request('GET', `/application/nests/${nestId.parse(id)}`, { parseDates: true })).attributes), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new Nest(this.httpClient, this, {
            id: nestId.parse(id),
        }));
    }
}
