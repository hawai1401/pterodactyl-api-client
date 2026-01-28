import AllocationClient from "./allocation/allocation.client.js";
export default class NodeClient {
    httpClient;
    allocation;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.allocation = new AllocationClient(httpClient);
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/nodes");
        return {
            ...res,
            date: res.data.map((node) => ({
                ...node,
                attributes: {
                    ...node.attributes,
                    created_at: new Date(node.attributes.created_at),
                    updated_at: new Date(node.attributes.updated_at),
                },
            })),
        };
    }
    async info(id) {
        const res = await this.httpClient.request("GET", `/application/nodes/${id}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async create(options) {
        const res = await this.httpClient.request("POST", "/application/nodes", options);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(id, options) {
        const res = await this.httpClient.request("PATCH", `/application/nodes/${id}`, options);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    configuration(id) {
        return this.httpClient.request("GET", `/application/nodes/${id}/configuration`);
    }
    delete(id) {
        return this.httpClient.request("DELETE", `/application/nodes/${id}`);
    }
}
