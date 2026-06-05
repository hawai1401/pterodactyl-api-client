import { updateLocationSchema, locationId } from './location.schemas.js';
export class LocationClient {
    httpClient;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = locationId.parse(id);
    }
    async fetch() {
        const locationObject = await this.httpClient.request('GET', `/application/locations/${this.id}`, { parseDates: true });
        return locationObject.attributes;
    }
    async update(payload) {
        const locationObject = await this.httpClient.request('PATCH', `/application/locations/${this.id}`, updateLocationSchema.parse(payload), { parseDates: true });
        return locationObject.attributes;
    }
    delete() {
        return this.httpClient.request('DELETE', `/application/locations/${this.id}`);
    }
}
