import { allocationId, assignAllocationSchema, editAllocationSchema, userServerId, } from "../server.schemas.js";
export default class AllocationClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    list(id) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/network/allocations`);
    }
    assign(id, options) {
        const parsedValues = assignAllocationSchema.parse(options);
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations`, { ip: parsedValues.ip, port: parsedValues.port });
    }
    setPrimary(id, allocation) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}/primary`);
    }
    edit(id, allocation, options = {}) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`, editAllocationSchema.parse(options));
    }
    delete(id, allocation) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/network/allocations/${allocationId.parse(allocation)}`);
    }
}
