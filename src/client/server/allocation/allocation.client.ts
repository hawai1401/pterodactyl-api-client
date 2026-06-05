import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  Allocation,
  AllocationObject,
} from '../allocations/allocations.types.js';
import { allocationId, editAllocationSchema } from '../server.schemas.js';
import type { EditAllocationPayload } from './allocation.types.js';

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

  async edit(payload: EditAllocationPayload): Promise<Allocation> {
    const allocationObject = await this.httpClient.request<
      AllocationObject,
      EditAllocationPayload
    >(
      'POST',
      `/client/servers/${this.server}/network/allocations/${this.allocation}`,
      editAllocationSchema.parse(payload),
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
