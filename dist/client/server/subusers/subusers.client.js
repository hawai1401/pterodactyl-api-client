import { createSubuserSchema } from '../server.schemas.js';
export default class SubusersClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async list() {
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/users`);
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
    async create(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/users`, createSubuserSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
}
