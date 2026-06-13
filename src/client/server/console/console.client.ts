import type { HttpClient } from '../../../class/HttpClient.js';
import { userServerCommandSchema } from '../server.schemas.js';
import type { SendConsoleCommandPayload } from './console.types.js';
import { WebsocketClient } from './websocket/websocket.client.js';

export class ConsoleClient {
  public websocket: WebsocketClient;

  constructor(
    private httpClient: HttpClient,
    panelUrl: URL,
    readonly server: string,
  ) {
    this.websocket = new WebsocketClient(httpClient, panelUrl, this.server);
  }

  send(payload: SendConsoleCommandPayload) {
    return this.httpClient.request<void, SendConsoleCommandPayload>(
      'POST',
      `/client/servers/${this.server}/command`,
      userServerCommandSchema.parse(payload),
    );
  }
}
