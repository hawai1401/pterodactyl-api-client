import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import type { NodeManager } from './node.manager.js';
import {
  setManagerCacheSymbol,
  removeManagerCacheSymbol,
} from '../../symbols.js';
import { createNodeSchema } from './node.schemas.js';
import { NodeAllocationManager } from './allocation/allocation.manager.js';
import type {
  BaseNode,
  CreateNodePayload,
  NodeConfiguration,
  NodeConfigurationData,
  NodeObject,
  Scheme,
} from './node.types.js';
import type { BaseFetchOptions } from '../../types.js';

export class Node {
  public id!: number;
  public uuid!: string;
  public public!: boolean;
  public name!: string;
  public description!: string;
  public locationId!: number;
  public fqdn!: string;
  public scheme!: Scheme;
  public behindProxy!: boolean;
  public maintenanceMode!: boolean;
  public memory!: number;
  public memoryOverallocate!: number;
  public disk!: number;
  public diskOverallocate!: number;
  public uploadSize!: number;
  public daemonListen!: number;
  public daemonSftp!: number;
  public daemonBase!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public allocatedResources!: {
    memory: number;
    disk: number;
  };

  public allocations: NodeAllocationManager;

  constructor(
    private httpClient: HttpClient,
    private nodeManager: NodeManager,
    data: Partial<BaseNode> & Pick<BaseNode, 'id'>,
    allocationsTtl?: number,
  ) {
    Object.assign(this, data);
    this.allocations = new NodeAllocationManager(
      this.httpClient,
      this.id,
      allocationsTtl,
    );
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<NodeObject>(
          'GET',
          `/application/nodes/${this.id}`,
          { parseDates: true },
        )
      ).attributes,
    );

    this.nodeManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async update(
    payload: CreateNodePayload,
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<
          NodeObject,
          zInfer<typeof createNodeSchema>
        >(
          'PATCH',
          `/application/nodes/${this.id}`,
          createNodeSchema.parse(payload),
          { parseDates: true },
        )
      ).attributes,
    );

    this.nodeManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async configuration(): Promise<NodeConfiguration> {
    return this.httpClient.request<NodeConfigurationData>(
      'GET',
      `/application/nodes/${this.id}/configuration`,
    );
  }

  async delete(): Promise<void> {
    this.nodeManager[removeManagerCacheSymbol](this.id);
    await this.httpClient.request('DELETE', `/application/nodes/${this.id}`);
  }
}
