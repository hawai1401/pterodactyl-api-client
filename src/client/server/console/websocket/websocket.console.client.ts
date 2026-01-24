import HttpClient from "../../../../class/HttpClient.js";
import type {
  WebSocketCredentials,
  WebSocketCredentialsOptions,
  WebSocketMessage,
} from "./websocket.console.types.js";
import type { Signal } from "../../server.types.js";
import WebSocket from "ws";

export default class WebsocketClient {
  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
  ) {}

  credentials(id: string) {
    return this.httpClient.request<WebSocketCredentials>(
      "GET",
      `/client/servers/${id}/websocket`,
    );
  }

  async connect(
    id: string,
    {
      onConsoleOutput,
      onStats,
      onStatusChange,
    }: WebSocketCredentialsOptions = {},
  ) {
    const credentials = await this.credentials(id);

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

        socket.addEventListener("message", (event) => {
          const data = JSON.parse(event.data.toString()) as WebSocketMessage;
          if (data.event === "stats" && onStats)
            onStats(JSON.parse(data.args[0]));
          if (data.event === "status" && onStatusChange)
            onStatusChange(data.args[0]);
          if (data.event === "console output" && onConsoleOutput)
            onConsoleOutput(data.args[0]);
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
