import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { nodeId } from "./node.schemas.js";
import type { CreateNodeArgs, Node } from "../nodes/nodes.types.js";
import { createNodeSchema } from "../nodes/nodes.schemas.js";
import type { NodeConfiguration } from "./node.types.js";
import AllocationsClient from "./allocations/allocations.client.js";
import AllocationClient from "./allocation/allocation.client.js";

export default class NodeClient {
  public allocations: AllocationsClient;
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    id: number,
  ) {
    this.id = nodeId.parse(id);
    this.allocations = new AllocationsClient(httpClient, this.id);
  }

  allocation(id: number) {
    return new AllocationClient(this.httpClient, this.id, id);
  }

  async info() {
    const res = await this.httpClient.request<Node<string>>(
      "GET",
      `/application/nodes/${this.id}`,
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

  async edit(options: CreateNodeArgs) {
    const res = await this.httpClient.request<
      Node<string>,
      z.infer<typeof createNodeSchema>
    >(
      "PATCH",
      `/application/nodes/${this.id}`,
      createNodeSchema.parse(options),
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

  configuration() {
    return this.httpClient.request<NodeConfiguration>(
      "GET",
      `/application/nodes/${this.id}/configuration`,
    );
  }

  delete() {
    return this.httpClient.request<NodeConfiguration>(
      "DELETE",
      `/application/nodes/${this.id}`,
    );
  }
}
