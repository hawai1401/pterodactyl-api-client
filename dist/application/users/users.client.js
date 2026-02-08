import z from "zod";
import { createUserSchema } from "./users.schemas.js";
export default class UsersClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list({ includeServers, } = {}) {
        const res = await this.httpClient.request("GET", `/application/users${includeServers ? "?include=servers" : ""}`);
        return includeServers
            ? {
                ...res,
                data: res.data.map((user) => ({
                    ...user,
                    attributes: {
                        ...user.attributes,
                        created_at: new Date(user.attributes.created_at),
                        updated_at: new Date(user.attributes.updated_at),
                        relationships: {
                            ...user.attributes
                                .relationships,
                            servers: {
                                ...user.attributes
                                    .relationships.servers,
                                ...user.attributes.relationships.servers.data.map((server) => ({
                                    ...server,
                                    attributes: {
                                        ...server.attributes,
                                    },
                                })),
                            },
                        },
                    },
                })),
            }
            : {
                ...res,
                data: res.data.map((user) => ({
                    ...user,
                    attributes: {
                        ...user.attributes,
                        created_at: new Date(user.attributes.created_at),
                        updated_at: new Date(user.attributes.updated_at),
                    },
                })),
            };
    }
    create(args) {
        return this.httpClient.request("POST", "/application/users", createUserSchema.parse(args));
    }
}
