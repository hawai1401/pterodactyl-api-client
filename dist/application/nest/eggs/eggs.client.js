export default class EggsClient {
    httpClient;
    nest;
    constructor(httpClient, nest) {
        this.httpClient = httpClient;
        this.nest = nest;
    }
    async list() {
        const res = await this.httpClient.request("GET", `/application/nests/${this.nest}/eggs`);
        return {
            ...res,
            data: res.data.map((egg) => ({
                ...egg.attributes,
                created_at: new Date(egg.attributes.created_at),
                updated_at: new Date(egg.attributes.updated_at),
            })),
        };
    }
}
