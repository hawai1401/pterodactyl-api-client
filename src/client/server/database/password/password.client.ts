import type HttpClient from "../../../../class/HttpClient.js";
import type { DatabaseWithPassword } from "../database.types.js";

export default class PasswordClient {
  constructor(private httpClient: HttpClient) {}

  async rotate(id: string, database: string) {
    const res = await this.httpClient.request<DatabaseWithPassword>(
      "POST",
      `/client/servers/${id}/databases/${database}/rotate-password`,
    );
    return {
      ...res,
      password: res.attributes.relationships.password.attributes.password,
    };
  }
}
