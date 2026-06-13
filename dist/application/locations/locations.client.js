import { createLocationSchema, listLocationsFilterSchema, } from './locations.schemas.js';
import {} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';
export class LocationsClient extends BaseClient {
    async fetch(options) {
        const filter = listLocationsFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({ ...options, filter });
        const LocationObjectList = await this.httpClient.request('GET', `/application/locations?${queries}`, { parseDates: true });
        return {
            data: LocationObjectList.data.map((locationObject) => locationObject.attributes),
            pagination: LocationObjectList.meta.pagination,
        };
    }
    async create(payload) {
        const locationObject = await this.httpClient.request('POST', `/application/locations`, createLocationSchema.parse(payload), {
            parseDates: true,
        });
        return locationObject.attributes;
    }
}
