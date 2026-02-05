import { userServerId } from "../server.schemas.js";
export default class PowerClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    start(id) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/power`, {
            signal: "start",
        });
    }
    stop(id) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/power`, {
            signal: "stop",
        });
    }
    restart(id) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/power`, {
            signal: "restart",
        });
    }
    kill(id) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/power`, {
            signal: "kill",
        });
    }
}
