import type HttpClient from '../../../class/HttpClient.js';
import { userServerCommandSchema } from '../server.schemas.js';
import type { SendConsoleCommandArgs } from './console.types.js';
import WebsocketClient from './websocket/websocket.console.client.js';

export default class ConsoleClient {
  public websocket: WebsocketClient;

  constructor(
    private httpClient: HttpClient,
    panelUrl: URL,
    readonly server: string,
  ) {
    this.websocket = new WebsocketClient(httpClient, panelUrl, this.server);
  }

  send(options: SendConsoleCommandArgs) {
    return this.httpClient.request<void, SendConsoleCommandArgs>(
      'POST',
      `/client/servers/${this.server}/command`,
      userServerCommandSchema.parse(options),
    );
  }
}
