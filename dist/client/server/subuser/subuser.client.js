import { setSubuserPermissionsSchema, userServerSubuserId, } from '../server.schemas.js';
export class SubuserClient {
    httpClient;
    server;
    subuser;
    constructor(httpClient, server, subuser) {
        this.httpClient = httpClient;
        this.server = server;
        this.subuser = userServerSubuserId.parse(subuser);
    }
    async fetch() {
        const subuserObject = await this.httpClient.request('GET', `/client/servers/${this.server}/users/${this.subuser}`, { parseDates: true });
        return subuserObject.attributes;
    }
    async setPermissions(payload) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/users/${this.subuser}`, setSubuserPermissionsSchema.parse(payload), { parseDates: true });
        return res.attributes;
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/users/${this.subuser}`);
    }
}
