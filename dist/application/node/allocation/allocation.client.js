import { allocationId } from "../node.schemas.js";
export default class AllocationClient {
    httpClient;
    node;
    id;
    constructor(httpClient, node, id) {
        this.httpClient = httpClient;
        this.node = node;
        this.id = allocationId.parse(id);
    }
    delete() {
        return this.httpClient.request("DELETE", `/application/nodes/${this.node}/allocations/${this.id}`);
    }
}
