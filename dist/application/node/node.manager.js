import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createNodeSchema, listNodesFilterSchema, nodeId, } from './node.schemas.js';
import { Node } from './node.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class NodeManager extends BaseCacheManager {
    httpClient;
    allocationsTtl;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5, allocationsTtl) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.allocationsTtl = allocationsTtl;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: listNodesFilterSchema.optional().parse(options?.filter),
        });
        const nodeObjectList = await this.httpClient.request('GET', `/application/nodes?${queries}`, { parseDates: true });
        return {
            data: nodeObjectList.data.map((nodeObject) => this.setCache(new Node(this.httpClient, this, nodeObject.attributes, this.allocationsTtl), options?.cache)),
            pagination: nodeObjectList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheNode = this.getCache(id);
        if (cacheNode && !options?.force)
            return cacheNode;
        return this.setCache(new Node(this.httpClient, this, (await this.httpClient.request('GET', `/application/nodes/${nodeId.parse(id)}`, { parseDates: true })).attributes, this.allocationsTtl), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new Node(this.httpClient, this, {
            id: nodeId.parse(id),
        }, this.allocationsTtl));
    }
    async create(payload, options) {
        return this.setCache(new Node(this.httpClient, this, (await this.httpClient.request('POST', '/application/nodes', createNodeSchema.parse(payload), {
            parseDates: true,
        })).attributes, this.allocationsTtl), options?.cache);
    }
}
