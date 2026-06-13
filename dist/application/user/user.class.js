import { removeManagerCacheSymbol, setManagerCacheSymbol, } from '../../symbols.js';
import { createUserSchema } from './user.schemas.js';
export class User {
    httpClient;
    userManager;
    id;
    externalId;
    uuid;
    username;
    email;
    firstName;
    lastName;
    language;
    rootAdmin;
    '2fa';
    createdAt;
    updatedAt;
    servers;
    constructor(httpClient, userManager, data) {
        this.httpClient = httpClient;
        this.userManager = userManager;
        Object.assign(this, data);
    }
    async fetch(options) {
        const userObject = await this.httpClient.request('GET', `/application/users/${this.id ?? `external/${this.externalId}`}${options?.includeServers ? '?include=servers' : ''}`, { parseDates: true });
        if (!options?.includeServers)
            Object.assign(this, userObject.attributes);
        else {
            const { relationships, ...attributes } = userObject.attributes;
            Object.assign(this, {
                ...attributes,
                servers: relationships.servers.data.map((serverObject) => serverObject.attributes),
            });
        }
        this.userManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async update(payload, options) {
        Object.assign(this, (await this.httpClient.request('PATCH', `/application/users/${this.id}`, createUserSchema.parse(payload), { parseDates: true })).attributes);
        this.userManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async delete() {
        this.userManager[removeManagerCacheSymbol](this.id);
        if (this.externalId)
            this.userManager[removeManagerCacheSymbol](this.externalId);
        await this.httpClient.request('DELETE', `/application/users/${this.id}`);
    }
}
