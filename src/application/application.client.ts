import HttpClient from "../class/HttpClient.js";
import LocationClient from "./location/location.client.js";
import LocationsClient from "./locations/locations.client.js";
import NestClient from "./nest/nest.client.js";
import NestsClient from "./nests/nests.client.js";
import NodeClient from "./node/node.client.js";
import NodesClient from "./nodes/nodes.client.js";
import ServerClient from "./server/server.client.js";
import UserClient from "./user/user.client.js";
import UsersClient from "./users/users.client.js";
import ServersClient from "./servers/servers.client.js";
import type { UserId } from "./user/user.types.js";
import type { ApplicationServerId } from "./server/server.types.js";

export default class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public users: UsersClient;
  public servers: ServersClient;
  public locations: LocationsClient;
  public nodes: NodesClient;
  public nests: NestsClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.users = new UsersClient(this.httpClient);
    this.servers = new ServersClient(this.httpClient);
    this.locations = new LocationsClient(this.httpClient);
    this.nodes = new NodesClient(this.httpClient);
    this.nests = new NestsClient(this.httpClient);
  }

  location(id: number) {
    return new LocationClient(this.httpClient, id);
  }

  nest(id: number) {
    return new NestClient(this.httpClient, id);
  }

  node(id: number) {
    return new NodeClient(this.httpClient, id);
  }

  server(id: ApplicationServerId) {
    return new ServerClient(this.httpClient, id);
  }

  user(id: UserId) {
    return new UserClient(this.httpClient, id);
  }
}
