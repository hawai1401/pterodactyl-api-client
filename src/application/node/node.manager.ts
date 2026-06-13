import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import type {
  CreateNodePayload,
  ListNodesOptions,
  NodeObject,
} from './node.types.js';
import {
  createNodeSchema,
  listNodesFilterSchema,
  nodeId,
} from './node.schemas.js';
import { Node } from './node.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';

export class NodeManager extends BaseCacheManager<number, Node> {
  private allocationsTtl: number | undefined;

  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
    allocationsTtl?: number,
  ) {
    super(cacheTtl, 'id');
    this.allocationsTtl = allocationsTtl;
  }

  async list(options?: ListNodesOptions): Promise<Paginated<Node>> {
    const queries = buildQueryParams({
      ...options,
      filter: listNodesFilterSchema.optional().parse(options?.filter),
    });

    const nodeObjectList = await this.httpClient.request<
      ObjectListWithPagination<NodeObject>
    >('GET', `/application/nodes?${queries}`, { parseDates: true });

    return {
      data: nodeObjectList.data.map((nodeObject) =>
        this.setCache(
          new Node(
            this.httpClient,
            this,
            nodeObject.attributes,
            this.allocationsTtl,
          ),
          options?.cache,
        ),
      ),
      pagination: nodeObjectList.meta.pagination,
    };
  }

  async fetch(id: number, options?: BaseFetchOptions): Promise<Node> {
    const cacheNode = this.getCache(id);
    if (cacheNode && !options?.force) return cacheNode;

    return this.setCache(
      new Node(
        this.httpClient,
        this,
        (
          await this.httpClient.request<NodeObject>(
            'GET',
            `/application/nodes/${nodeId.parse(id)}`,
            { parseDates: true },
          )
        ).attributes,
        this.allocationsTtl,
      ),
      options?.cache,
    );
  }

  resolve(id: number): Node {
    return super.resolve(
      id,
      () =>
        new Node(
          this.httpClient,
          this,
          {
            id: nodeId.parse(id),
          },
          this.allocationsTtl,
        ),
    );
  }

  async create(
    payload: CreateNodePayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<Node> {
    return this.setCache(
      new Node(
        this.httpClient,
        this,
        (
          await this.httpClient.request<
            NodeObject,
            zInfer<typeof createNodeSchema>
          >('POST', '/application/nodes', createNodeSchema.parse(payload), {
            parseDates: true,
          })
        ).attributes,
        this.allocationsTtl,
      ),
      options?.cache,
    );
  }
}
