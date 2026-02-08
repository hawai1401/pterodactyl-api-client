import { nestEggId } from "../nest.schemas.js";
export default class EggClient {
    httpClient;
    nest;
    egg;
    constructor(httpClient, nest, egg) {
        this.httpClient = httpClient;
        this.nest = nest;
        this.egg = nestEggId.parse(egg);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/nests/${this.nest}/eggs/${this.egg}`);
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
