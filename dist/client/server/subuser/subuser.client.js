import { editSubuserSchema, userServerSubuserId } from '../server.schemas.js';
export default class SubuserClient {
    httpClient;
    server;
    subuser;
    constructor(httpClient, server, subuser) {
        this.httpClient = httpClient;
        this.server = server;
        this.subuser = userServerSubuserId.parse(subuser);
    }
    async info() {
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/users/${this.subuser}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    async edit(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/users/${this.subuser}`, editSubuserSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/users/${this.subuser}`);
    }
}
