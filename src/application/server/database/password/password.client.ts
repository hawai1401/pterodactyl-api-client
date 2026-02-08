import type HttpClient from "../../../../class/HttpClient.js";

export default class PasswordClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: number,
    readonly database: number,
  ) {}

  reset() {
    return this.httpClient.request<void>(
      "POST",
      `/application/servers/${this.server}/databases/${this.database}/reset-password`,
    );
  }
}
