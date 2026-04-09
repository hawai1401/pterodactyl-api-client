import { nestId } from "./nest.schemas.js";
import EggsClient from "./eggs/eggs.client.js";
import EggClient from "./egg/egg.client.js";
export default class NestClient {
    httpClient;
    eggs;
    id;
    constructor(httpClient, id) {
        this.httpClient = httpClient;
        this.id = nestId.parse(id);
        this.eggs = new EggsClient(httpClient, this.id);
    }
    egg(id) {
        return new EggClient(this.httpClient, this.id, id);
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
