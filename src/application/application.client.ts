import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import type { ApplicationServerId } from './server/server.types.js';
import { ApplicationUserManager } from './user/user.manager.js';
import { NodeManager } from './node/node.manager.js';

export class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public users: ApplicationUserManager;
  public servers: ServersClient;
  public locations: ApplicationLocationManager;
  public nodes: NodeManager;
  public nests: NestManager;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.users = new ApplicationUserManager(this.httpClient);
    this.servers = new ServersClient(this.httpClient);
    this.locations = new ApplicationLocationManager(this.httpClient);
    this.nodes = new NodeManager(this.httpClient);
    this.nests = new NestManager(this.httpClient);
  }

  server<Ids extends ApplicationServerId>(id: Ids) {
    return new ServerClient<Ids>(this.httpClient, id);
  }
}
