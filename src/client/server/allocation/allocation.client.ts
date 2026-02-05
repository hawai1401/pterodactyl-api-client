import type HttpClient from "../../../class/HttpClient.js";
import type { Allocation } from "../server.types.js";
import type {
  AllocationList,
  AssignAllocationArgs,
  EditAllocationArgs,
} from "./allocation.types.js";
import {
  allocationId,
  assignAllocationSchema,
  editAllocationSchema,
  userServerId,
} from "../server.schemas.js";
import type { IP } from "../../../types.js";

export default class AllocationClient {
  constructor(private httpClient: HttpClient) {}

  list(id: string) {
    return this.httpClient.request<AllocationList>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/network/allocations`,
    );
  }

  assign(id: string, options: AssignAllocationArgs) {
    const parsedValues = assignAllocationSchema.parse(options);
    return this.httpClient.request<Allocation, AssignAllocationArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations`,
      { ip: parsedValues.ip as IP, port: parsedValues.port },
    );
  }

  setPrimary(id: string, allocation: number) {
    return this.httpClient.request<Allocation>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}/primary`,
    );
  }

  edit(id: string, allocation: number, options: EditAllocationArgs = {}) {
    return this.httpClient.request<Allocation, EditAllocationArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`,
      editAllocationSchema.parse(options),
    );
  }

  delete(id: string, allocation: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`,
    );
  }
}
