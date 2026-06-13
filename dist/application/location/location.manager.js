import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createLocationSchema, listLocationsFilterSchema, locationId, } from './location.schemas.js';
import { ApplicationLocation } from './location.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class ApplicationLocationManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
    }
    async list(options) {
        const filter = listLocationsFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({
            ...options,
            filter,
        });
        const locationObjectList = await this.httpClient.request('GET', `/application/locations?${queries}`, { parseDates: true });
        return {
            data: locationObjectList.data.map((locationObject) => this.setCache(new ApplicationLocation(this.httpClient, this, locationObject.attributes), options?.cache)),
            pagination: locationObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheLocation = this.getCache(id);
        if (cacheLocation && !options?.force)
            return cacheLocation;
        const parsedId = locationId.parse(id);
        const locationObject = await this.httpClient.request('GET', `/application/locations/${parsedId}`, { parseDates: true });
        return this.setCache(new ApplicationLocation(this.httpClient, this, locationObject.attributes), options?.cache);
    }
    resolve(id) {
        return (this.getCache(id) ??
            new ApplicationLocation(this.httpClient, this, {
                id: locationId.parse(id),
            }));
    }
    async create(payload, options) {
        const locationObject = await this.httpClient.request('POST', '/application/locations', createLocationSchema.parse(payload), {
            parseDates: true,
        });
        return this.setCache(new ApplicationLocation(this.httpClient, this, locationObject.attributes), options?.cache);
    }
}
