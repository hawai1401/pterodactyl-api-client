import { HttpClient } from '../../../../class/HttpClient.js';
import WebSocket from 'ws';
import { userServerWebsocketSchema } from '../../server.schemas.js';
export class WebsocketClient {
    httpClient;
    panelUrl;
    server;
    constructor(httpClient, panelUrl, server) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.server = server;
    }
    credentials() {
        return this.httpClient.request('GET', `/client/servers/${this.server}/websocket`);
    }
    async connect(options) {
        const { onConsoleOutput, onStats, onStatusChange } = userServerWebsocketSchema.parse(options);
        const credentials = await this.credentials();
        return new Promise((resolve, reject) => {
            const socket = new WebSocket(credentials.data.socket, {
                headers: {
                    Origin: this.panelUrl.origin,
                },
            });
            socket.addEventListener('open', () => {
                socket.send(JSON.stringify({
                    event: 'auth',
                    args: [credentials.data.token],
                }));
                socket.addEventListener('message', async (event) => {
                    const data = JSON.parse(event.data.toString());
                    switch (data.event) {
                        case 'stats':
                            if (onStats)
                                await onStats(JSON.parse(data.args[0]));
                            break;
                        case 'status':
                            if (onStatusChange)
                                await onStatusChange(data.args[0]);
                            break;
                        case 'console output':
                            if (onConsoleOutput)
                                await onConsoleOutput(data.args[0]);
                            break;
                        default:
                            break;
                    }
                });
                setTimeout(() => {
                    resolve({
                        sendCommand(command) {
                            socket.send(JSON.stringify({
                                event: 'send command',
                                args: [command],
                            }));
                        },
                        sendSignal(state) {
                            socket.send(JSON.stringify({
                                event: 'set state',
                                args: [state],
                            }));
                        },
                    });
                }, 1000);
            });
            socket.addEventListener('error', (err) => {
                reject(err);
            });
        });
    }
}
