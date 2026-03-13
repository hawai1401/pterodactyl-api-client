import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
import { clientSchema } from "./schemas.js";
import type { role } from "./types.js";

export default class PterodactylAPIClient<T extends role> {
  private apiKey: string;
  readonly panelUrl: URL;
  readonly role: T;
  public user: ClientAPI;

  constructor(options: { apiKey: string; panelUrl: string; role: T }) {
    const { apiKey, panelUrl, role } = clientSchema.parse(options) as {
      apiKey: string;
      panelUrl: string;
      role: T;
    };

    this.panelUrl = new URL(panelUrl);
    this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
    this.role = role;
    this.apiKey = apiKey;
  }

  get admin(): T extends "admin" ? ApplicationAPI : never {
    if (this.role === "admin")
      // @ts-expect-error
      return new ApplicationAPI({
        panelUrl: this.panelUrl,
        apiKey: this.apiKey,
      });
    // @ts-expect-error
    return;
  }

  /**
   * @deprecated Client is now typed, typescript will no longer throw errors if the role is admin
   */
  isAdmin(): this is { admin: ApplicationAPI } {
    return this.admin !== undefined;
  }
}
