export class Egg {
    httpClient;
    id;
    uuid;
    name;
    nest;
    author;
    description;
    dockerImage;
    dockerImages;
    config;
    startup;
    script;
    createdAt;
    updatedAt;
    variables;
    constructor(httpClient, data) {
        this.httpClient = httpClient;
        Object.assign(this, data);
    }
    async fetch() {
        Object.assign(this, (await this.httpClient.request('GET', `/application/nests/${this.nest}/eggs/${this.id}`, { parseDates: true })).attributes);
        return this;
    }
}
