import HttpClient from "../../class/HttpClient.js";
import A2fClient from "./a2f/a2f.client.js";
import type { user } from "./account.types.js";
import ActivityClient from "./activity/activity.client.js";
import ApiKeyClient from "./api-key/api-key.client.js";
import EmailClient from "./email/email.client.js";
import PasswordClient from "./password/password.client.js";
import SshKeyClient from "./ssh-key/ssh-key.client.js";

export default class Account {
  public a2f: A2fClient;
  public activity: ActivityClient;
  public apiKey: ApiKeyClient;
  public email: EmailClient;
  public password: PasswordClient;
  public sshKey: SshKeyClient;

  constructor(private httpClient: HttpClient) {
    this.a2f = new A2fClient(httpClient);
    this.activity = new ActivityClient(httpClient);
    this.apiKey = new ApiKeyClient(httpClient);
    this.email = new EmailClient(httpClient);
    this.password = new PasswordClient(httpClient);
    this.sshKey = new SshKeyClient(httpClient);
  }

  info(): Promise<user> {
    return this.httpClient.request<user>("GET", "/client/account");
  }
}
