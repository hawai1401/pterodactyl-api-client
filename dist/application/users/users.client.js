import z from 'zod';
import { createUserSchema, listUsersFilterSchema } from './users.schemas.js';
import buildQueryParams from '../../utils/buildQueryParams.js';
export default class UsersClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(options = {}) {
        const filter = listUsersFilterSchema.optional().parse(options.filter);
        const queries = buildQueryParams({
            page: options.page,
            per_page: options.per_page,
            sort: options.sort,
            filter,
        });
        const res = await this.httpClient.request('GET', `/application/users?${queries}${options.includeServers ? '&include=servers' : ''}`);
        return {
            ...res,
            data: res.data.map((user) => ({
                ...user,
                attributes: {
                    ...user.attributes,
                    created_at: new Date(user.attributes.created_at),
                    updated_at: new Date(user.attributes.updated_at),
                    relationships: options.includeServers
                        ? {
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
                        }
                        : undefined,
                },
            })),
        };
    }
    create(args) {
        return this.httpClient.request('POST', '/application/users', createUserSchema.parse(args));
    }
}
