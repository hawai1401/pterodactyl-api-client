import { userServerCommandSchema } from '../server.schemas.js';
import { WebsocketClient } from './websocket/websocket.client.js';
export class ConsoleClient {
    httpClient;
    server;
    websocket;
    constructor(httpClient, panelUrl, server) {
        this.httpClient = httpClient;
        this.server = server;
        this.websocket = new WebsocketClient(httpClient, panelUrl, this.server);
    }
    send(payload) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/command`, userServerCommandSchema.parse(payload));
    }
}
