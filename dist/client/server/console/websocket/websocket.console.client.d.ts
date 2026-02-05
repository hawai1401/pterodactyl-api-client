import HttpClient from "../../../../class/HttpClient.js";
import type { WebSocketCredentials, WebSocketCredentialsOptions } from "./websocket.console.types.js";
import type { Signal } from "../../server.types.js";
export default class WebsocketClient {
    private httpClient;
    readonly panelUrl: URL;
    constructor(httpClient: HttpClient, panelUrl: URL);
    credentials(id: string): Promise<WebSocketCredentials>;
    connect(id: string, options?: WebSocketCredentialsOptions): Promise<{
        sendCommand(command: string): void;
        sendSignal(state: Signal): void;
    }>;
}
//# sourceMappingURL=websocket.console.client.d.ts.map