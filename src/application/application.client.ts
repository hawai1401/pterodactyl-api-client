import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ApplicationServerManager } from './server/server.manager.js';
import { ApplicationUserManager } from './user/user.manager.js';

export class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public users: ApplicationUserManager;
  public servers: ApplicationServerManager;
  public locations: ApplicationLocationManager;
  public nodes: NodeManager;
  public nests: NestManager;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.servers = new ApplicationServerManager(this.httpClient);
    this.users = new ApplicationUserManager(this.httpClient, this.servers);
    this.locations = new ApplicationLocationManager(this.httpClient);
    this.nodes = new NodeManager(this.httpClient);
    this.nests = new NestManager(this.httpClient);
  }
}
