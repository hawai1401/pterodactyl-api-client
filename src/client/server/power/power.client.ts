import type HttpClient from "../../../class/HttpClient.js";
import type { PowerArgs } from "./power.types.js";
import { userServerId } from "../server.schemas.js";

export default class PowerClient {
  constructor(private httpClient: HttpClient) {}

  start(id: string) {
    return this.httpClient.request<void, PowerArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/power`,
      {
        signal: "start",
      },
    );
  }

  stop(id: string) {
    return this.httpClient.request<void, PowerArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/power`,
      {
        signal: "stop",
      },
    );
  }

  restart(id: string) {
    return this.httpClient.request<void, PowerArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/power`,
      {
        signal: "restart",
      },
    );
  }

  kill(id: string) {
    return this.httpClient.request<void, PowerArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/power`,
      {
        signal: "kill",
      },
    );
  }
}
