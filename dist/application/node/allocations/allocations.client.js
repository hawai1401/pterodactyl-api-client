import buildQueryParams from '../../../utils/buildQueryParams.js';
import { listAllocationsFilterSchema } from '../node.schemas.js';
export default class AllocationClient {
    httpClient;
    node;
    constructor(httpClient, node) {
        this.httpClient = httpClient;
        this.node = node;
    }
    list(options = {}) {
        const filter = listAllocationsFilterSchema.optional().parse(options.filter);
        const queries = buildQueryParams({ ...options, filter });
        return this.httpClient.request('GET', `/application/nodes/${this.node}/allocations?${queries}`);
    }
    create(options) {
        return this.httpClient.request('POST', `/application/nodes/${this.node}/allocations`, options);
    }
}
