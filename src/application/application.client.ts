import HttpClient from "../class/HttpClient.js";
import UserClient from "./user/user.client.js";

export default class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public user: UserClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.user = new UserClient(this.httpClient);
  }
}
