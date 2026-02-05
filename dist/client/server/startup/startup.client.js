import { editVariableSchema, userServerId } from "../server.schemas.js";
export default class StartupClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    info(id) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/settings/startup`);
    }
    edit(id, options) {
        return this.httpClient.request("PUT", `/client/servers/${userServerId.parse(id)}/settings/startup`, editVariableSchema.parse(options));
    }
}
