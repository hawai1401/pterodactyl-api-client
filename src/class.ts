import ApplicationAPI from "./application/application.client.js";
import { ClientAPI } from "./client/index.js";

export default class PterodactylAPIClient {
  readonly panelUrl: URL;
  public user: ClientAPI;
  public admin?: ApplicationAPI;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: string }) {
    this.panelUrl = new URL(panelUrl);
    this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
    this.admin = new ApplicationAPI({ panelUrl: this.panelUrl, apiKey });

    if (!apiKey.startsWith("ptla") && !apiKey.startsWith("ptlc"))
      throw new Error("Invalide API key");
  }
}
