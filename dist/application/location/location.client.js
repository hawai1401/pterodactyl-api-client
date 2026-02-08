import z from "zod";
import { editLocationSchema, locationId } from "./location.schemas.js";
export default class LocationClient {
    httpClient;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = locationId.parse(id);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/locations/${this.id}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(options) {
        const res = await this.httpClient.request("PATCH", `/application/locations/${this.id}`, editLocationSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete() {
        return this.httpClient.request("DELETE", `/application/locations/${this.id}`);
    }
}
