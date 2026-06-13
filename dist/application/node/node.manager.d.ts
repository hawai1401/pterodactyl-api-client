import type { BaseFetchOptions, NonMethodPartial, Paginated } from '../../types.js';
import type { CreateNodePayload, ListNodesOptions } from './node.types.js';
import { Node } from './node.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class NodeManager extends BaseCacheManager<number, Node> {
    private httpClient;
    constructor(httpClient: HttpClient, cacheTtl?: number);
    list(options?: ListNodesOptions): Promise<Paginated<Node>>;
    fetch(id: number, options?: BaseFetchOptions): Promise<Node>;
    resolve(id: number): Node | (NonMethodPartial<Node> & Pick<Node, 'id'>);
    create(payload: CreateNodePayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<Node>;
}
//# sourceMappingURL=node.manager.d.ts.map