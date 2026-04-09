import z from 'zod';
import type HttpClient from '../../class/HttpClient.js';
import type { CreateNodeArgs, Node, NodeList } from './nodes.types.js';
import { createNodeSchema, listNodesFilterSchema } from './nodes.schemas.js';
import type { BaseListArgs, Sort } from '../../types.js';
import buildQueryParams from '../../utils/buildQueryParams.js';

export default class NodesClient {
  constructor(private httpClient: HttpClient) {}

  async list(
    options: {
      filter?:
        | {
            uuid?: string | undefined;
            name?: string | undefined;
            fqdn?: string | undefined;
            daemon_token_id?: string | undefined;
          }
        | undefined;
      sort?:
        | {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
            memory?: Sort | undefined;
            disk?: Sort | undefined;
          }
        | undefined;
    } & BaseListArgs = {},
  ) {
    const filter = listNodesFilterSchema.optional().parse(options.filter);
    const queries = buildQueryParams<
      {
        uuid?: string | undefined;
        name?: string | undefined;
        fqdn?: string | undefined;
        daemon_token_id?: string | undefined;
      },
      {
        id?: Sort | undefined;
        uuid?: Sort | undefined;
        memory?: Sort | undefined;
        disk?: Sort | undefined;
      }
    >({ ...options, filter });
    const res = await this.httpClient.request<NodeList>(
      'GET',
      `/application/nodes?${queries}`,
    );
    return {
      ...res,
      data: res.data.map((node) => ({
        ...node,
        attributes: {
          ...node.attributes,
          created_at: new Date(node.attributes.created_at),
          updated_at: new Date(node.attributes.updated_at),
        },
      })),
    };
  }

  async create(options: CreateNodeArgs) {
    const res = await this.httpClient.request<
      Node<string>,
      z.infer<typeof createNodeSchema>
    >('POST', '/application/nodes', createNodeSchema.parse(options));
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
