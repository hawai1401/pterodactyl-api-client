import { ClientAPI } from "./client/index.js";
import type { role } from "./types.js";

export default class PterodactyleAPIClient {
  readonly apiUrl: URL;
  readonly role: role;
  public user: ClientAPI;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: string }) {
    this.apiUrl = new URL(panelUrl);
    this.user = new ClientAPI(this.apiUrl, apiKey);

    if (apiKey.startsWith("ptlc")) this.role = "user";
    else if (apiKey.startsWith("ptla")) this.role = "admin";
    else throw new Error("Invalide API key");
  }
}
