import type HttpClient from "../../../class/HttpClient.js";
import type { EditPasswordArgs } from "./password.types.js";

export default class PasswordClient {
  constructor(private httpClient: HttpClient) {}

  edit({
    current_password,
    password,
    password_confirmation,
  }: EditPasswordArgs): Promise<void> {
    return this.httpClient.request<void, EditPasswordArgs>(
      "PUT",
      "/client/account/password",
      {
        current_password,
        password,
        password_confirmation,
      },
    );
  }
}
