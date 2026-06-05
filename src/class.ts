import { ApplicationAPI } from './application/application.client.js';
import { ClientAPI } from './client/client.class.js';
import { clientSchema } from './schemas.js';
import type { AccountRole } from './types.js';

export class PterodactylAPIClient<T extends AccountRole> {
  private apiKey: string;
  readonly panelUrl: URL;
  readonly role: T;
  public user: ClientAPI;
  declare public admin: T extends 'admin' ? ApplicationAPI : never;

  constructor(options: { apiKey: string; panelUrl: string; role: T }) {
    const { apiKey, panelUrl, role } = clientSchema.parse(options) as {
      apiKey: string;
      panelUrl: string;
      role: T;
    };

    this.panelUrl = new URL(panelUrl);
    this.role = role;
    this.apiKey = apiKey;

    this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
    if (role === 'admin')
      this.admin = new ApplicationAPI({
        panelUrl: this.panelUrl,
        apiKey: this.apiKey,
      }) as T extends 'admin' ? ApplicationAPI : never;
  }
}
