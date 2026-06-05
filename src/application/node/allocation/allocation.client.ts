import type { HttpClient } from '../../../class/HttpClient.js';
import { allocationId } from '../node.schemas.js';

export class AllocationClient {
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    readonly node: number,
    id: number,
  ) {
    this.id = allocationId.parse(id);
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/application/nodes/${this.node}/allocations/${this.id}`,
    );
  }
}
