import type HttpClient from "../../../class/HttpClient.js";
import type { Stats } from "./ressource.types.js";
import { userServerId } from "../server.schemas.js";

export default class RessourceClient {
  constructor(private httpClient: HttpClient) {}

  usage(id: string) {
    return this.httpClient.request<Stats>(
      "GET",
      `/client/servers/${userServerId.parse(id)}`,
    );
  }
}
