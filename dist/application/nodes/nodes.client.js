import z from "zod";
import { createNodeSchema } from "./nodes.schemas.js";
export default class NodesClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request("GET", "/application/nodes");
        return {
            ...res,
            data: res.data.map((node) => ({
                ...node,
                attributes: {
                    ...node.attributes,
                    created_at: new Date(node.attributes.created_at),
                    updated_at: new Date(node.attributes.updated_at),
                },
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request("POST", "/application/nodes", createNodeSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
}
