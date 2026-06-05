import { BaseClient } from '../../class/BaseClient.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { A2fClient } from './a2f/a2f.client.js';
import type { Account, AccountObject } from './account.types.js';
import { ActivityClient } from './activity/activity.client.js';
import { ApiKeyClient } from './api-key/api-key.client.js';
import { EmailClient } from './email/email.client.js';
import { PasswordClient } from './password/password.client.js';
import { SshKeyClient } from './ssh-key/ssh-key.client.js';

export class AccountClient extends BaseClient {
  public a2f: A2fClient;
  public activity: ActivityClient;
  public apiKey: ApiKeyClient;
  public email: EmailClient;
  public password: PasswordClient;
  public sshKey: SshKeyClient;

  constructor(httpClient: HttpClient) {
    super(httpClient);

    this.a2f = new A2fClient(httpClient);
    this.activity = new ActivityClient(httpClient);
    this.apiKey = new ApiKeyClient(httpClient);
    this.email = new EmailClient(httpClient);
    this.password = new PasswordClient(httpClient);
    this.sshKey = new SshKeyClient(httpClient);
  }

  async fetch(): Promise<Account> {
    const userObject = await this.httpClient.request<AccountObject>(
      'GET',
      '/client/account',
    );
    return userObject.attributes;
  }
}
