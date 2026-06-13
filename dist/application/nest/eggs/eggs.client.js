export class EggsClient {
    httpClient;
    nest;
    constructor(httpClient, nest) {
        this.httpClient = httpClient;
        this.nest = nest;
    }
    async fetch() {
        const res = await this.httpClient.request('GET', `/application/nests/${this.nest}/eggs`, { parseDates: true });
        return res.data.map((eggObject) => eggObject.attributes);
    }
}
