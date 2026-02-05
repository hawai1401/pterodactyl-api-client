import { createSubuserSchema, editSubuserSchema, userServerId, userServerSubuserId, } from "../server.schemas.js";
export default class SubuserClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/users`);
        return {
            ...res,
            data: res.data.map((subuser) => ({
                ...subuser,
                attributes: {
                    ...subuser.attributes,
                    created_at: new Date(subuser.attributes.created_at),
                },
            })),
        };
    }
    async info(id, subuser) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    async create(id, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/users`, createSubuserSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    async edit(id, subuser, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`, editSubuserSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    delete(id, subuser) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`);
    }
}
