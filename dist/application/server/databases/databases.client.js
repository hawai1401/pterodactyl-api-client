import z from "zod";
import { applicationServerId, createApplicationDatabaseSchema, } from "../server.schemas.js";
export default class DatabasesClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(server) {
        const res = await this.httpClient.request("GET", `/application/servers/${applicationServerId.parse(server)}/databases`);
        return {
            ...res,
            data: res.data.map((db) => ({
                ...db,
                attributes: {
                    ...db.attributes,
                    created_at: new Date(db.attributes.created_at),
                    updated_at: new Date(db.attributes.updated_at),
                },
            })),
        };
    }
    async create(server, args) {
        const res = await this.httpClient.request("POST", `/application/servers/${applicationServerId.parse(server)}/databases`, createApplicationDatabaseSchema.parse(args));
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
