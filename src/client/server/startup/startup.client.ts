import type HttpClient from "../../../class/HttpClient.js";
import type { EggVariable } from "../server.types.js";
import type { EditEggVariable, EggVariableList } from "./startup.types.js";

export default class StartupClient {
  constructor(private httpClient: HttpClient) {}

  info(id: string) {
    return this.httpClient.request<EggVariableList>(
      "GET",
      `/client/servers/${id}/settings/startup`,
    );
  }

  edit(id: string, { key, value }: EditEggVariable) {
    return this.httpClient.request<EggVariable, EditEggVariable>(
      "PUT",
      `/client/servers/${id}/settings/startup`,
      { key, value },
    );
  }
}
