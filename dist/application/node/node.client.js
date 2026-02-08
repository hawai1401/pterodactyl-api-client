import z from "zod";
import { nodeId } from "./node.schemas.js";
import { createNodeSchema } from "../nodes/nodes.schemas.js";
import AllocationsClient from "./allocations/allocations.client.js";
import AllocationClient from "./allocation/allocation.client.js";
export default class NodeClient {
    httpClient;
    allocations;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = nodeId.parse(id);
        this.allocations = new AllocationsClient(httpClient, this.id);
    }
    allocation(id) {
        return new AllocationClient(this.httpClient, this.id, id);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/nodes/${this.id}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(options) {
        const res = await this.httpClient.request("PATCH", `/application/nodes/${this.id}`, createNodeSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    configuration() {
        return this.httpClient.request("GET", `/application/nodes/${this.id}/configuration`);
    }
    delete() {
        return this.httpClient.request("DELETE", `/application/nodes/${this.id}`);
    }
}
