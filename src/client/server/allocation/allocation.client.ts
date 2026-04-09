import type HttpClient from '../../../class/HttpClient.js';
import type { Allocation } from '../server.types.js';
import type { EditAllocationArgs } from '../allocation.types.js';
import { allocationId, editAllocationSchema } from '../server.schemas.js';

export default class AllocationClient {
  readonly allocation: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    allocation: number,
  ) {
    this.allocation = allocationId.parse(allocation);
  }

  setPrimary() {
    return this.httpClient.request<Allocation>(
      'POST',
      `/client/servers/${this.server}/network/allocations/${this.allocation}/primary`,
    );
  }

  edit(options: EditAllocationArgs = {}) {
    return this.httpClient.request<Allocation, EditAllocationArgs>(
      'POST',
      `/client/servers/${this.server}/network/allocations/${this.allocation}`,
      editAllocationSchema.parse(options),
    );
  }

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/network/allocations/${this.allocation}`,
    );
  }
}
