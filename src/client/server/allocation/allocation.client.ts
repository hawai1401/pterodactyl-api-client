import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  Allocation,
  AllocationObject,
} from '../allocations/allocations.types.js';
import { allocationId, updateAllocationSchema } from '../server.schemas.js';
import type { UpdateAllocationPayload } from './allocation.types.js';

export class AllocationClient {
  readonly allocation: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    allocation: number,
  ) {
    this.allocation = allocationId.parse(allocation);
  }

  async setPrimary(): Promise<Allocation> {
    const allocationObject = await this.httpClient.request<AllocationObject>(
      'POST',
      `/client/servers/${this.server}/network/allocations/${this.allocation}/primary`,
    );
    return allocationObject.attributes;
  }

  async setNote(payload: UpdateAllocationPayload): Promise<Allocation> {
    const allocationObject = await this.httpClient.request<
      AllocationObject,
      UpdateAllocationPayload
    >(
      'POST',
      `/client/servers/${this.server}/network/allocations/${this.allocation}`,
      updateAllocationSchema.parse(payload),
    );
    return allocationObject.attributes;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/network/allocations/${this.allocation}`,
    );
  }
}
