import HttpClient from "../class/HttpClient.js";
import buildQueryParams from "../utils/buildQueryParams.js";
import { Account } from "./account/index.js";
import { userServerFilterSchema } from "./client.schema.js";
import { Server, } from "./server/index.js";
export default class ClientAPI {
    httpClient;
    panelUrl;
    account;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.account = new Account(this.httpClient);
    }
    servers(options = {}) {
        const filter = userServerFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({
            ...options,
            filter,
        });
        return this.httpClient.request("GET", `/client?${queries}`);
    }
    server(id) {
        return new Server(this.httpClient, this.panelUrl, id);
    }
}
