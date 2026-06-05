import { createServerSchema, listServersFilterSchema, } from './servers.schemas.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';
export class ServersClient extends BaseClient {
    async fetch(options) {
        const filter = listServersFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({ ...options, filter });
        const res = await this.httpClient.request('GET', `/application/servers?${queries}`, { parseDates: true });
        return res;
    }
    async create(payload) {
        const serverObject = await this.httpClient.request('POST', `/application/servers`, createServerSchema.parse(payload), {
            parseDates: true,
        });
        return serverObject.attributes;
    }
}
