export default class AllocationClient {
    httpClient;
    node;
    constructor(httpClient, node) {
        this.httpClient = httpClient;
        this.node = node;
    }
    list() {
        return this.httpClient.request("GET", `/application/nodes/${this.node}/allocations`);
    }
    create(options) {
        return this.httpClient.request("POST", `/application/nodes/${this.node}/allocations`, options);
    }
}
