import HttpClient from '../../class/HttpClient.js';
import A2fClient from './a2f/a2f.client.js';
import type { user } from './account.types.js';
import ActivityClient from './activity/activity.client.js';
import ApiKeyClient from './api-key/api-key.client.js';
import EmailClient from './email/email.client.js';
import PasswordClient from './password/password.client.js';
import SshKeyClient from './ssh-key/ssh-key.client.js';
export default class Account {
    private httpClient;
    a2f: A2fClient;
    activity: ActivityClient;
    apiKey: ApiKeyClient;
    email: EmailClient;
    password: PasswordClient;
    sshKey: SshKeyClient;
    constructor(httpClient: HttpClient);
    info(): Promise<user>;
}
//# sourceMappingURL=account.client.d.ts.map