import { nestId } from "./nest.schemas.js";
export default class NestClient {
    httpClient;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = nestId.parse(id);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/nests/${this.id}`);
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
