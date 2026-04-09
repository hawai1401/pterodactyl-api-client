import type HttpClient from '../../../class/HttpClient.js';
import type { SendConsoleCommandArgs } from './console.types.js';
import WebsocketClient from './websocket/websocket.console.client.js';
export default class ConsoleClient {
    private httpClient;
    readonly server: string;
    websocket: WebsocketClient;
    constructor(httpClient: HttpClient, panelUrl: URL, server: string);
    send(options: SendConsoleCommandArgs): Promise<void>;
}
//# sourceMappingURL=console.client.d.ts.map