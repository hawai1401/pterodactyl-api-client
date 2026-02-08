import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type { CreateNodeArgs, Node, NodeList } from "./nodes.types.js";
import { createNodeSchema } from "./nodes.schemas.js";

export default class NodesClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<NodeList>(
      "GET",
      "/application/nodes",
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
    >("POST", "/application/nodes", createNodeSchema.parse(options));
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
