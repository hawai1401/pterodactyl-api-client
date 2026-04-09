import z from 'zod';
import { createServerSchema, listServersFilterSchema, } from './servers.schemas.js';
import buildQueryParams from '../../utils/buildQueryParams.js';
export default class ServersClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(options = {}) {
        const filter = listServersFilterSchema.optional().parse(options.filter);
        const queries = buildQueryParams({ ...options, filter });
        const res = await this.httpClient.request('GET', `/application/servers?${queries}`);
        return {
            ...res,
            data: res.data.map((server) => ({
                ...server,
                attributes: {
                    ...server.attributes,
                    created_at: new Date(server.attributes.created_at),
                    updated_at: new Date(server.attributes.updated_at),
                },
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request('POST', `/application/servers`, createServerSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
}
