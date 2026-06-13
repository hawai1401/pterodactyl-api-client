import type {
  BaseFetchOptions,
  ObjectList,
  ObjectListWithPagination,
  Paginated,
} from '../../../types.js';
import type {
  CreateApplicationAllocationPayload,
  ListAllocationsOptions,
  ApplicationAllocationObject,
} from './allocation.types.js';
import { listAllocationsFilterSchema, allocationId } from '../node.schemas.js';
import { NodeAllocation } from './allocation.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
import { buildQueryParams } from '../../../utils/buildQueryParams.js';

export class NodeAllocationManager extends BaseCacheManager<
  number,
  NodeAllocation
> {
  constructor(
    private httpClient: HttpClient,
    readonly nodeId: number,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: ListAllocationsOptions,
  ): Promise<Paginated<NodeAllocation>> {
    const queries = buildQueryParams({
      ...options,
      filter: listAllocationsFilterSchema.optional().parse(options?.filter),
    });

    const allocationObjectList = await this.httpClient.request<
      ObjectListWithPagination<ApplicationAllocationObject>
    >('GET', `/application/nodes/${this.nodeId}/allocations?${queries}`);

    return {
      data: allocationObjectList.data.map((allocationObject) =>
        this.setCache(
          new NodeAllocation(this.httpClient, this, {
            ...allocationObject.attributes,
            node: this.nodeId,
          }),
          options?.cache,
        ),
      ),
      pagination: allocationObjectList.meta.pagination,
    };
  }

  resolve(id: number): NodeAllocation {
    return super.resolve(
      id,
      () =>
        new NodeAllocation(this.httpClient, this, {
          id: allocationId.parse(id),
          node: this.nodeId,
        }),
    );
  }

  async create(
    payload: CreateApplicationAllocationPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<NodeAllocation[]> {
    return (
      await this.httpClient.request<
        ObjectList<ApplicationAllocationObject>,
        CreateApplicationAllocationPayload
      >('POST', `/application/nodes/${this.nodeId}/allocations`, payload)
    ).data.map((allocationObject) =>
      this.setCache(
        new NodeAllocation(this.httpClient, this, {
          ...allocationObject.attributes,
          node: this.nodeId,
        }),
        options?.cache,
      ),
    );
  }
}
