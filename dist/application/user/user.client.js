import { userIdSchema } from './user.schemas.js';
import { createUserSchema } from '../users/users.schemas.js';
export class UserClient {
    httpClient;
    id;
    external_id;
    constructor(httpClient, ids) {
        this.httpClient = httpClient;
        const { id, external_id } = userIdSchema.parse(ids);
        this.id = id;
        this.external_id = external_id;
    }
    async fetch(options) {
        const userObject = await this.httpClient.request('GET', `/application/users/${this.id ?? `external/${this.external_id}`}${options?.includeServers ? '?include=servers' : ''}`, { parseDates: true });
        if (!options?.includeServers)
            return userObject
                .attributes;
        const { relationships, ...attributes } = userObject.attributes;
        return {
            ...attributes,
            servers: relationships.servers.data.map((serverObject) => serverObject.attributes),
        };
    }
    async edit(payload) {
        if (!this.id)
            throw new Error("L'id de l'utilisateur est requis !");
        const userObject = await this.httpClient.request('PATCH', `/application/users/${this.id}`, createUserSchema.parse(payload), { parseDates: true });
        return userObject.attributes;
    }
    delete() {
        if (!this.id)
            throw new Error("L'id de l'utilisateur est requis !");
        return this.httpClient.request('DELETE', `/application/users/${this.id}`);
    }
}
