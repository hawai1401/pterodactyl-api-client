import HttpClient from "../../../../class/HttpClient.js";
import type {
  WebSocketCredentials,
  WebSocketCredentialsOptions,
  WebSocketMessage,
} from "./websocket.console.types.js";
import type { Signal } from "../../server.types.js";
import WebSocket from "ws";
import {
  userServerId,
  userServerWebsocketSchema,
} from "../../server.schemas.js";

export default class WebsocketClient {
  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
  ) {}

  credentials(id: string) {
    return this.httpClient.request<WebSocketCredentials>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/websocket`,
    );
  }

  async connect(id: string, options: WebSocketCredentialsOptions = {}) {
    const { onConsoleOutput, onStats, onStatusChange } =
      userServerWebsocketSchema.parse(options);
    const credentials = await this.credentials(userServerId.parse(id));

    return new Promise<{
      sendCommand(command: string): void;
      sendSignal(state: Signal): void;
    }>((resolve, reject) => {
      const socket = new WebSocket(credentials.data.socket, {
        headers: {
          Origin: this.panelUrl.origin,
        },
      });

      socket.addEventListener("open", () => {
        socket.send(
          JSON.stringify({
            event: "auth",
            args: [credentials.data.token],
          }),
        );

        socket.addEventListener("message", async (event) => {
          const data = JSON.parse(event.data.toString()) as WebSocketMessage;
          if (data.event === "stats" && onStats)
            await onStats(JSON.parse(data.args[0]));
          if (data.event === "status" && onStatusChange)
            await onStatusChange(data.args[0]);
          if (data.event === "console output" && onConsoleOutput)
            await onConsoleOutput(data.args[0]);
        });

        setTimeout(() => {
          resolve({
            sendCommand(command: string) {
              socket.send(
                JSON.stringify({
                  event: "send command",
                  args: [command],
                }),
              );
            },
            sendSignal(state: Signal) {
              socket.send(
                JSON.stringify({
                  event: "set state",
                  args: [state],
                }),
              );
            },
          });
        }, 1000);
      });

      socket.addEventListener("error", (err) => {
        reject(err);
      });
    });
  }
}
