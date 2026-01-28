import z from "zod";
export default class LocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/locations");
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
    async info(id) {
        const res = await this.httpClient.request("GET", `/application/locations/${id}`);
        return {
            ...res,
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async create(options) {
        const schema = z.object({
            short: z.string().min(3).max(60),
            long: z.string().min(3).max(191),
        });
        const res = await this.httpClient.request("POST", `/application/locations`, schema.parse(options));
        return {
            ...res,
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(id, options) {
        const schema = z
            .object({
            short: z.string().min(3).max(60).optional(),
            long: z.string().min(3).max(191).optional(),
        })
            .refine((data) => data.short || data.long, {
            message: "Either short or long must be provided",
            path: ["short"],
        });
        const res = await this.httpClient.request("PATCH", `/application/locations/${id}`, schema.parse(options));
        return {
            ...res,
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete(id) {
        return this.httpClient.request("POST", `/application/locations/${id}`);
    }
}
