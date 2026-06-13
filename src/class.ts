import { ApplicationAPI } from './application/application.client.js';
import { ClientAPI } from './client/client.class.js';
import { clientSchema } from './schemas.js';
import type { AccountRole, CacheTtlOptions } from './types.js';

export class PterodactylAPIClient<T extends AccountRole> {
  private apiKey: string;
  readonly panelUrl: URL;
  readonly role: T;
  public user: ClientAPI;
  declare public admin: T extends 'admin' ? ApplicationAPI : never;

  constructor(options: {
    apiKey: string;
    panelUrl: string;
    role: T;
    cacheTtl?: CacheTtlOptions;
  }) {
    this.panelUrl = new URL(clientSchema.parse(options).panelUrl);
    this.role = clientSchema.parse(options).role as T;
    this.apiKey = clientSchema.parse(options).apiKey;

    this.user = new ClientAPI({
      panelUrl: this.panelUrl,
      apiKey: this.apiKey,
      cacheTtl: clientSchema.parse(options).cache?.servers,
    });

    if (this.role === 'admin')
      this.admin = new ApplicationAPI({
        panelUrl: this.panelUrl,
        apiKey: this.apiKey,
        cache: clientSchema.parse(options).cache as CacheTtlOptions,
      }) as T extends 'admin' ? ApplicationAPI : never;
  }
}
