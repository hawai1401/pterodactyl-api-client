import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createUserSchema, listUsersFilterSchema, userId, userIdSchema, } from './user.schemas.js';
import { User } from './user.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { ApplicationServer } from '../server/server.class.js';
import { ApplicationServerManager } from '../server/server.manager.js';
export class UserManager extends BaseCacheManager {
    httpClient;
    serverManager;
    constructor(httpClient, serverManager, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id', 'externalId');
        this.httpClient = httpClient;
        this.serverManager = serverManager;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: listUsersFilterSchema.optional().parse(options?.filter),
        });
        const userObjectList = await this.httpClient.request('GET', `/application/users?${queries}${options?.includeServers ? '&include=servers' : ''}`, { parseDates: true });
        return {
            data: userObjectList.data.map((userObject) => {
                if (!options?.includeServers)
                    return this.setCache(new User(this.httpClient, this, userObject.attributes), options?.cache);
                const { relationships, ...attributes } = userObject.attributes;
                return this.setCache(new User(this.httpClient, this, {
                    ...attributes,
                    servers: relationships.servers.data.map((serverObject) => new ApplicationServer(this.httpClient, this.serverManager, serverObject.attributes)),
                }), options.cache);
            }),
            pagination: userObjectList.meta.pagination,
        };
    }
    async fetch(user, options) {
        const cacheUser = (user.id && this.getCache(user.id)) ??
            (user.external_id && this.getCache(user.external_id));
        if (cacheUser &&
            !options?.force &&
            (options?.includeServers ? !!cacheUser.servers : true))
            return cacheUser;
        const userObject = await this.httpClient.request('GET', `/application/users/${((u) => u.id ?? `external/${u.external_id}`)(userIdSchema.parse(user))}${options?.includeServers ? '?include=servers' : ''}`, { parseDates: true });
        if (!options?.includeServers)
            return this.setCache(new User(this.httpClient, this, userObject.attributes), options?.cache);
        const { relationships, ...attributes } = userObject.attributes;
        return this.setCache(new User(this.httpClient, this, {
            ...attributes,
            servers: relationships.servers.data.map((serverObject) => new ApplicationServer(this.httpClient, this.serverManager, serverObject.attributes)),
        }), options.cache);
    }
    resolve(user) {
        return super.resolve(user, () => new User(this.httpClient, this, {
            id: userId.parse(user),
        }));
    }
    async create(payload, options) {
        return this.setCache(new User(this.httpClient, this, (await this.httpClient.request('POST', '/application/users', createUserSchema.parse(payload), {
            parseDates: true,
        })).attributes), options?.cache);
    }
}
