import { userServerId } from "../server.schemas.js";
export default class RessourceClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    usage(id) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}`);
    }
}
