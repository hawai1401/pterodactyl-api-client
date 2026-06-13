import { BaseClient } from '../../class/BaseClient.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { A2fClient } from './a2f/a2f.client.js';
import type { Account } from './account.types.js';
import { ActivityClient } from './activity/activity.client.js';
import { ApiKeyClient } from './api-key/api-key.client.js';
import { EmailClient } from './email/email.client.js';
import { PasswordClient } from './password/password.client.js';
import { SshKeyClient } from './ssh-key/ssh-key.client.js';
export declare class AccountClient extends BaseClient {
    a2f: A2fClient;
    activity: ActivityClient;
    apiKey: ApiKeyClient;
    email: EmailClient;
    password: PasswordClient;
    sshKey: SshKeyClient;
    constructor(httpClient: HttpClient);
    fetch(): Promise<Account>;
}
//# sourceMappingURL=account.client.d.ts.map