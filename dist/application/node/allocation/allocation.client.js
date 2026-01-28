export default class AllocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    list(id) {
        return this.httpClient.request("GET", `/application/nodes/${id}/allocations`);
    }
    create(id, options) {
        return this.httpClient.request("POST", `/application/nodes/${id}/allocations`, options);
    }
    delete(id, allocation) {
        return this.httpClient.request("DELETE", `/application/nodes/${id}/allocations/${allocation}`);
    }
}
