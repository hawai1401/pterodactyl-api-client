import { createUserSchema, listUsersFilterSchema } from './users.schemas.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';
export class UsersClient extends BaseClient {
    async fetch(options) {
        const filter = listUsersFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({
            ...options,
            filter,
        });
        const userObjectList = await this.httpClient.request('GET', `/application/users?${queries}${options?.includeServers ? '&include=servers' : ''}`, { parseDates: true });
        return {
            data: userObjectList.data.map((userObject) => {
                if (!options?.includeServers)
                    return userObject
                        .attributes;
                const { relationships, ...attributes } = userObject.attributes;
                return {
                    ...attributes,
                    servers: relationships.servers.data.map((serverObject) => serverObject.attributes),
                };
            }),
            pagination: userObjectList.meta.pagination,
        };
    }
    async create(payload) {
        const userObject = await this.httpClient.request('POST', '/application/users', createUserSchema.parse(payload), {
            parseDates: true,
        });
        return userObject.attributes;
    }
}
