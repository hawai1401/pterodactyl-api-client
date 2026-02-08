import z from "zod";
import { createServerSchema } from "./servers.schemas.js";
export default class ServersClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/servers");
        return {
            ...res,
            data: res.data.map((server) => ({
                ...server,
                created_at: new Date(server.created_at),
                updated_at: new Date(server.updated_at),
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request("POST", `/application/servers`, createServerSchema.parse(options));
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
