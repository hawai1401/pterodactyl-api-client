import HttpClient from "../class/HttpClient.js";
import { Account } from "./account/index.js";

export default class ClientAPI {
  private httpClient: HttpClient;

  public account: Account;

  constructor(apiUrl: URL, apiKey: string) {
    this.httpClient = new HttpClient(apiUrl, apiKey);
    this.account = new Account(this.httpClient);
  }
}
