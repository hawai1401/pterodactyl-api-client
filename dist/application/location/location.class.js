import { removeManagerCacheSymbol, setManagerCacheSymbol, } from '../../symbols.js';
import { updateLocationSchema } from './location.schemas.js';
export class ApplicationLocation {
    httpClient;
    locationManager;
    id;
    short;
    long;
    createdAt;
    updatedAt;
    constructor(httpClient, locationManager, data) {
        this.httpClient = httpClient;
        this.locationManager = locationManager;
        Object.assign(this, data);
    }
    async fetch(options) {
        const locationObject = await this.httpClient.request('GET', `/application/locations/${this.id}`, { parseDates: true });
        Object.assign(this, locationObject.attributes);
        this.locationManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async update(payload, options) {
        const locationObject = await this.httpClient.request('PATCH', `/application/locations/${this.id}`, updateLocationSchema.parse(payload), { parseDates: true });
        Object.assign(this, locationObject.attributes);
        this.locationManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async delete() {
        this.locationManager[removeManagerCacheSymbol](this.id);
        await this.httpClient.request('DELETE', `/application/locations/${this.id}`);
    }
}
