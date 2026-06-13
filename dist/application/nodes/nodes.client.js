import { createNodeSchema, listNodesFilterSchema } from './nodes.schemas.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';
export class NodesClient extends BaseClient {
    async fetch(options) {
        const filter = listNodesFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({ ...options, filter });
        const res = await this.httpClient.request('GET', `/application/nodes?${queries}`, { parseDates: true });
        return res;
    }
    async create(payload) {
        const nodeObject = await this.httpClient.request('POST', '/application/nodes', createNodeSchema.parse(payload), {
            parseDates: true,
        });
        return nodeObject.attributes;
    }
}
