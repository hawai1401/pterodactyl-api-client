import type { infer as zInfer } from 'zod';
import type {
  CreateNodePayload,
  FetchNodesOptions,
  Node,
  NodeObject,
} from './nodes.types.js';
import { createNodeSchema, listNodesFilterSchema } from './nodes.schemas.js';
import type { ObjectListWithPagination } from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';

export class NodesClient extends BaseClient {
  async fetch(options?: FetchNodesOptions) {
    const filter = listNodesFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({ ...options, filter });
    const res = await this.httpClient.request<
      ObjectListWithPagination<NodeObject>
    >('GET', `/application/nodes?${queries}`, { parseDates: true });
    return res;
  }

  async create(payload: CreateNodePayload): Promise<Node> {
    const nodeObject = await this.httpClient.request<
      NodeObject,
      zInfer<typeof createNodeSchema>
    >('POST', '/application/nodes', createNodeSchema.parse(payload), {
      parseDates: true,
    });
    return nodeObject.attributes;
  }
}
