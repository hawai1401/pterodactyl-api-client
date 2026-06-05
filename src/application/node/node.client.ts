import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import { allocationId, nodeId } from './node.schemas.js';
import type {
  CreateNodePayload,
  Node,
  NodeObject,
} from '../nodes/nodes.types.js';
import { createNodeSchema } from '../nodes/nodes.schemas.js';
import type { NodeConfiguration, NodeConfigurationData } from './node.types.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { AllocationClient } from './allocation/allocation.client.js';

export class NodeClient {
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
    return new AllocationClient(
      this.httpClient,
      this.id,
      allocationId.parse(id),
    );
  }

  async fetch(): Promise<Node> {
    const nodeObject = await this.httpClient.request<NodeObject>(
      'GET',
      `/application/nodes/${this.id}`,
      { parseDates: true },
    );
    return nodeObject.attributes;
  }

  async update(payload: CreateNodePayload): Promise<Node> {
    const nodeObject = await this.httpClient.request<
      NodeObject,
      zInfer<typeof createNodeSchema>
    >(
      'PATCH',
      `/application/nodes/${this.id}`,
      createNodeSchema.parse(payload),
      { parseDates: true },
    );
    return nodeObject.attributes;
  }

  configuration(): Promise<NodeConfiguration> {
    return this.httpClient.request<NodeConfigurationData>(
      'GET',
      `/application/nodes/${this.id}/configuration`,
    );
  }

  delete(): Promise<NodeConfiguration> {
    return this.httpClient.request<NodeConfigurationData>(
      'DELETE',
      `/application/nodes/${this.id}`,
    );
  }
}
