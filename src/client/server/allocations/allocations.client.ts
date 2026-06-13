import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../../class/HttpClient.js';
import { assignAllocationSchema } from '../server.schemas.js';
import type { ObjectList } from '../../../types.js';
import type {
  Allocation,
  AllocationObject,
  AssignAllocationPayload,
} from './allocations.types.js';

export class AllocationsClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<Allocation[]> {
    const allocationObjectList = await this.httpClient.request<
      ObjectList<AllocationObject>
    >('GET', `/client/servers/${this.server}/network/allocations`);
    return allocationObjectList.data.map(
      (allocationObject) => allocationObject.attributes,
    );
  }

  async assign(payload: AssignAllocationPayload): Promise<Allocation> {
    const allocationObject = await this.httpClient.request<
      AllocationObject,
      zInfer<typeof assignAllocationSchema>
    >(
      'POST',
      `/client/servers/${this.server}/network/allocations`,
      assignAllocationSchema.parse(payload),
    );
    return allocationObject.attributes;
  }
}
