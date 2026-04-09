import { userServerCommandSchema } from '../server.schemas.js';
import WebsocketClient from './websocket/websocket.console.client.js';
export default class ConsoleClient {
    httpClient;
    server;
    websocket;
    constructor(httpClient, panelUrl, server) {
        this.httpClient = httpClient;
        this.server = server;
        this.websocket = new WebsocketClient(httpClient, panelUrl, this.server);
    }
    send(options) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/command`, userServerCommandSchema.parse(options));
    }
}
