import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createNodeSchema, listNodesFilterSchema, nodeId, } from './node.schemas.js';
import { Node } from './node.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class NodeManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
    }
    async list(options) {
        const filter = listNodesFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({
            ...options,
            filter,
        });
        const nodeObjectList = await this.httpClient.request('GET', `/application/nodes?${queries}`, { parseDates: true });
        return {
            data: nodeObjectList.data.map((nodeObject) => this.setCache(new Node(this.httpClient, this, nodeObject.attributes), options?.cache)),
            pagination: nodeObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheNode = this.getCache(id);
        if (cacheNode && !options?.force)
            return cacheNode;
        const parsedId = nodeId.parse(id);
        const nodeObject = await this.httpClient.request('GET', `/application/nodes/${parsedId}`, { parseDates: true });
        return this.setCache(new Node(this.httpClient, this, nodeObject.attributes), options?.cache);
    }
    resolve(id) {
        return (this.getCache(id) ??
            new Node(this.httpClient, this, {
                id: nodeId.parse(id),
            }));
    }
    async create(payload, options) {
        const nodeObject = await this.httpClient.request('POST', '/application/nodes', createNodeSchema.parse(payload), {
            parseDates: true,
        });
        return this.setCache(new Node(this.httpClient, this, nodeObject.attributes), options?.cache);
    }
}
