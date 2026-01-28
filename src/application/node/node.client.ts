import type HttpClient from "../../class/HttpClient.js";
import AllocationClient from "./allocation/allocation.client.js";
import type {
  CreateNodeArgs,
  Node,
  NodeConfiguration,
  NodeList,
} from "./node.types.js";

export default class NodeClient {
  public allocation: AllocationClient;

  constructor(private httpClient: HttpClient) {
    this.allocation = new AllocationClient(httpClient);
  }

  async list() {
    const res = await this.httpClient.request<NodeList>(
      "GET",
      "/application/nodes",
    );
    return {
      ...res,
      date: res.data.map((node) => ({
        ...node,
        attributes: {
          ...node.attributes,
          created_at: new Date(node.attributes.created_at),
          updated_at: new Date(node.attributes.updated_at),
        },
      })),
    };
  }

  async info(id: number) {
    const res = await this.httpClient.request<Node<string>>(
      "GET",
      `/application/nodes/${id}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async create(options: CreateNodeArgs) {
    const res = await this.httpClient.request<Node<string>, CreateNodeArgs>(
      "POST",
      "/application/nodes",
      options,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async edit(id: number, options: CreateNodeArgs) {
    const res = await this.httpClient.request<Node<string>, CreateNodeArgs>(
      "PATCH",
      `/application/nodes/${id}`,
      options,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  configuration(id: number) {
    return this.httpClient.request<NodeConfiguration, CreateNodeArgs>(
      "GET",
      `/application/nodes/${id}/configuration`,
    );
  }

  delete(id: number) {
    return this.httpClient.request<NodeConfiguration, CreateNodeArgs>(
      "DELETE",
      `/application/nodes/${id}`,
    );
  }
}
