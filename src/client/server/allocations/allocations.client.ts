import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import { assignAllocationSchema } from '../server.schemas.js';
import type { Allocation } from '../server.types.js';
import type {
  AllocationList,
  AssignAllocationArgs,
} from '../allocation.types.js';

export default class AllocationsClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  list() {
    return this.httpClient.request<AllocationList>(
      'GET',
      `/client/servers/${this.server}/network/allocations`,
    );
  }

  assign(options: AssignAllocationArgs) {
    return this.httpClient.request<
      Allocation,
      z.infer<typeof assignAllocationSchema>
    >(
      'POST',
      `/client/servers/${this.server}/network/allocations`,
      assignAllocationSchema.parse(options),
    );
  }
}
