import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createLocationSchema, listLocationsFilterSchema, locationId, } from './location.schemas.js';
import { Location } from './location.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class LocationManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: listLocationsFilterSchema.optional().parse(options?.filter),
        });
        const locationObjectList = await this.httpClient.request('GET', `/application/locations?${queries}`, { parseDates: true });
        return {
            data: locationObjectList.data.map((locationObject) => this.setCache(new Location(this.httpClient, this, locationObject.attributes), options?.cache)),
            pagination: locationObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheLocation = this.getCache(id);
        if (cacheLocation && !options?.force)
            return cacheLocation;
        return this.setCache(new Location(this.httpClient, this, (await this.httpClient.request('GET', `/application/locations/${locationId.parse(id)}`, { parseDates: true })).attributes), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new Location(this.httpClient, this, {
            id: locationId.parse(id),
        }));
    }
    async create(payload, options) {
        return this.setCache(new Location(this.httpClient, this, (await this.httpClient.request('POST', '/application/locations', createLocationSchema.parse(payload), {
            parseDates: true,
        })).attributes), options?.cache);
    }
}
