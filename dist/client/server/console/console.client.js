import { userServerCommandSchema, userServerId } from "../server.schemas.js";
import WebsocketClient from "./websocket/websocket.console.client.js";
export default class ConsoleClient {
    httpClient;
    panelUrl;
    websocket;
    constructor(httpClient, panelUrl) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.websocket = new WebsocketClient(httpClient, panelUrl);
    }
    send(id, options) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/command`, userServerCommandSchema.parse(options));
    }
}
