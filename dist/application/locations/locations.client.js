import z from 'zod';
import { createLocationSchema, listLocationsFilterSchema, } from './locations.schemas.js';
import buildQueryParams from '../../utils/buildQueryParams.js';
export default class LocationsClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(options = {}) {
        const filter = listLocationsFilterSchema.optional().parse(options.filter);
        const queries = buildQueryParams({ ...options, filter });
        const res = await this.httpClient.request('GET', `/application/locations?${queries}`);
        return {
            ...res,
            data: res.data.map((location) => ({
                ...location,
                attributes: {
                    ...location.attributes,
                    created_at: new Date(location.attributes.created_at),
                    updated_at: new Date(location.attributes.updated_at),
                },
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request('POST', `/application/locations`, createLocationSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
}
