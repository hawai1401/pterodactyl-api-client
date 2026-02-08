import type HttpClient from "../../../class/HttpClient.js";
import type {
  ApplicationAllocationList,
  ApplicationAllocationListWithDate,
  CreateApplicationAllocationArgs,
} from "./allocations.types.js";

export default class AllocationClient {
  constructor(
    private httpClient: HttpClient,
    readonly node: number,
  ) {}

  list() {
    return this.httpClient.request<ApplicationAllocationListWithDate>(
      "GET",
      `/application/nodes/${this.node}/allocations`,
    );
  }

  create(options: CreateApplicationAllocationArgs) {
    return this.httpClient.request<
      ApplicationAllocationList,
      CreateApplicationAllocationArgs
    >("POST", `/application/nodes/${this.node}/allocations`, options);
  }
}
