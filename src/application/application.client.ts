import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestClient } from './nest/nest.client.js';
import { NestsClient } from './nests/nests.client.js';
import { NodeClient } from './node/node.client.js';
import { NodesClient } from './nodes/nodes.client.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import type { ApplicationServerId } from './server/server.types.js';
import { ApplicationUserManager } from './user/user.manager.js';

export class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public users: ApplicationUserManager;
  public servers: ServersClient;
  public locations: ApplicationLocationManager;
  public nodes: NodesClient;
  public nests: NestsClient;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.users = new ApplicationUserManager(this.httpClient);
    this.servers = new ServersClient(this.httpClient);
    this.locations = new ApplicationLocationManager(this.httpClient);
    this.nodes = new NodesClient(this.httpClient);
    this.nests = new NestsClient(this.httpClient);
  }

  nest(id: number) {
    return new NestClient(this.httpClient, id);
  }

  node(id: number) {
    return new NodeClient(this.httpClient, id);
  }

  server<Ids extends ApplicationServerId>(id: Ids) {
    return new ServerClient<Ids>(this.httpClient, id);
  }
}
