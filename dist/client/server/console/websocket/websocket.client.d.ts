import { HttpClient } from '../../../../class/HttpClient.js';
import type { WebSocketCredentialsOptions } from './websocket.types.js';
import type { Signal } from '../../server.types.js';
export declare class WebsocketClient {
    private httpClient;
    private panelUrl;
    readonly server: string;
    constructor(httpClient: HttpClient, panelUrl: URL, server: string);
    credentials(): Promise<{
        data: {
            token: string;
            socket: string;
        };
    }>;
    connect(options?: WebSocketCredentialsOptions): Promise<{
        sendCommand(command: string): void;
        sendSignal(state: Signal): void;
    }>;
}
//# sourceMappingURL=websocket.client.d.ts.map