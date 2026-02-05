import type HttpClient from "../../../class/HttpClient.js";
import type { SendConsoleCommandArgs } from "./console.types.js";
import WebsocketClient from "./websocket/websocket.console.client.js";
export default class ConsoleClient {
    private httpClient;
    readonly panelUrl: URL;
    websocket: WebsocketClient;
    constructor(httpClient: HttpClient, panelUrl: URL);
    send(id: string, options: SendConsoleCommandArgs): Promise<void>;
}
//# sourceMappingURL=console.client.d.ts.map