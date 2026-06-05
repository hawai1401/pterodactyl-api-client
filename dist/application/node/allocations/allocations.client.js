import { buildQueryParams } from '../../../utils/buildQueryParams.js';
import { listAllocationsFilterSchema } from '../node.schemas.js';
export class AllocationsClient {
    httpClient;
    node;
    constructor(httpClient, node) {
        this.httpClient = httpClient;
        this.node = node;
    }
    async fetch(options) {
        const filter = listAllocationsFilterSchema
            .optional()
            .parse(options?.filter);
        const queries = buildQueryParams({ ...options, filter });
        const allocationObjectList = await this.httpClient.request('GET', `/application/nodes/${this.node}/allocations?${queries}`);
        return {
            data: allocationObjectList.data.map((allocationObject) => allocationObject.attributes),
            pagination: allocationObjectList.meta.pagination,
        };
    }
    create(payload) {
        return this.httpClient.request('POST', `/application/nodes/${this.node}/allocations`, payload);
    }
}
