import HttpClient from '../../../../class/HttpClient.js';
import type { WebSocketCredentials, WebSocketCredentialsOptions } from './websocket.console.types.js';
import type { Signal } from '../../server.types.js';
export default class WebsocketClient {
    private httpClient;
    private panelUrl;
    readonly server: string;
    constructor(httpClient: HttpClient, panelUrl: URL, server: string);
    credentials(): Promise<WebSocketCredentials>;
    connect(options?: WebSocketCredentialsOptions): Promise<{
        sendCommand(command: string): void;
        sendSignal(state: Signal): void;
    }>;
}
//# sourceMappingURL=websocket.console.client.d.ts.map