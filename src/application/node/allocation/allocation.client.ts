import type HttpClient from "../../../class/HttpClient.js";
import type {
  ApplicationAllocation,
  ApplicationAllocationList,
  ApplicationAllocationListWithDate,
  CreateApplicationAllocationArgs,
} from "./allocation.types.js";

export default class AllocationClient {
  constructor(private httpClient: HttpClient) {}

  list(id: number) {
    return this.httpClient.request<ApplicationAllocationListWithDate>(
      "GET",
      `/application/nodes/${id}/allocations`,
    );
  }

  create(id: number, options: CreateApplicationAllocationArgs) {
    return this.httpClient.request<
      ApplicationAllocationList,
      CreateApplicationAllocationArgs
    >("POST", `/application/nodes/${id}/allocations`, options);
  }

  delete(id: number, allocation: number) {
    return this.httpClient.request<ApplicationAllocationList, {}>(
      "DELETE",
      `/application/nodes/${id}/allocations/${allocation}`,
    );
  }
}
