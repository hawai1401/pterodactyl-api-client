import z from "zod";
export default class UserClient {
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
    async info({ id, external_id, }, { includeServers } = {}) {
        if (id) {
            const res = await this.httpClient.request("GET", `/application/users/${id}${includeServers ? "?include=servers" : ""}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else if (external_id) {
            const res = await this.httpClient.request("GET", `/application/users/external/${external_id}${includeServers ? "?include=servers" : ""}`);
            return {
                ...res,
                attributes: {
                    ...res.attributes,
                    created_at: new Date(res.attributes.created_at),
                    updated_at: new Date(res.attributes.updated_at),
                },
            };
        }
        else
            throw new Error("Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !");
    }
    create(args) {
        const schema = z.object({
            email: z.email(),
            username: z.string(),
            first_name: z.string(),
            last_name: z.string(),
            password: z.string().optional(),
            language: z.string().optional(),
            root_admin: z.boolean().optional(),
            external_id: z.string().optional(),
        });
        return this.httpClient.request("POST", "/application/users", schema.parse(args));
    }
    edit(id, args) {
        const schema = z.object({
            email: z.email(),
            username: z.string(),
            first_name: z.string(),
            last_name: z.string(),
            password: z.string().optional(),
            language: z.string().optional(),
            root_admin: z.boolean().optional(),
            external_id: z.string().optional(),
        });
        return this.httpClient.request("PATCH", `/application/users/${id}`, schema.parse(args));
    }
    delete(id) {
        return this.httpClient.request("DELETE", `/application/users/${id}`);
    }
}
