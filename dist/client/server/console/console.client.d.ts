import type { HttpClient } from '../../../class/HttpClient.js';
import type { SendConsoleCommandPayload } from './console.types.js';
import { WebsocketClient } from './websocket/websocket.client.js';
export declare class ConsoleClient {
    private httpClient;
    readonly server: string;
    websocket: WebsocketClient;
    constructor(httpClient: HttpClient, panelUrl: URL, server: string);
    send(payload: SendConsoleCommandPayload): Promise<void>;
}
//# sourceMappingURL=console.client.d.ts.map