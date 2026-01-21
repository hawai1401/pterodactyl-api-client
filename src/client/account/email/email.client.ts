import type HttpClient from "../../../class/HttpClient.js";
import type { EditEmailArgs } from "./email.types.js";

export default class EmailClient {
  constructor(private httpClient: HttpClient) {}

  editEmail({ email, password }: EditEmailArgs): Promise<void> {
    return this.httpClient.request<void, EditEmailArgs>(
      "PUT",
      "/client/account/email",
      { email, password },
    );
  }
}
