import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  ObjectList,
  ObjectListWithPagination,
  Paginated,
} from '../../../types.js';
import { buildQueryParams } from '../../../utils/buildQueryParams.js';
import { listAllocationsFilterSchema } from '../node.schemas.js';
import type {
  ApplicationAllocationObject,
  CreateApplicationAllocationPayload,
  ApplicationAllocation,
  FetchAllocationsOptions,
} from './allocations.types.js';

export class AllocationsClient {
  constructor(
    private httpClient: HttpClient,
    readonly node: number,
  ) {}

  async fetch(
    options?: FetchAllocationsOptions,
  ): Promise<Paginated<ApplicationAllocation>> {
    const filter = listAllocationsFilterSchema
      .optional()
      .parse(options?.filter);

    const queries = buildQueryParams({ ...options, filter });

    const allocationObjectList = await this.httpClient.request<
      ObjectListWithPagination<ApplicationAllocationObject>
    >('GET', `/application/nodes/${this.node}/allocations?${queries}`);
    return {
      data: allocationObjectList.data.map(
        (allocationObject) => allocationObject.attributes,
      ),
      pagination: allocationObjectList.meta.pagination,
    };
  }

  create(payload: CreateApplicationAllocationPayload) {
    return this.httpClient.request<
      ObjectList<ApplicationAllocationObject>,
      CreateApplicationAllocationPayload
    >('POST', `/application/nodes/${this.node}/allocations`, payload);
  }
}
