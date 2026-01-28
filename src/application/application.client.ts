import HttpClient from "../class/HttpClient.js";
import LocationClient from "./location/location.client.js";
import NodeClient from "./node/node.client.js";
import ServerClient from "./server/server.client.js";
import UserClient from "./user/user.client.js";

export default class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public user: UserClient;
  public server: ServerClient;
  public location: LocationClient;
  public node: NodeClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.user = new UserClient(this.httpClient);
    this.server = new ServerClient(this.httpClient);
    this.location = new LocationClient(this.httpClient);
    this.node = new NodeClient(this.httpClient);
  }
}
