import { HttpClient } from '../class/HttpClient.js';
import { LocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ApplicationServerManager } from './server/server.manager.js';
import { UserManager } from './user/user.manager.js';
import type { CacheTtlOptions } from '../types.js';

export class ApplicationAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public users: UserManager;
  public servers: ApplicationServerManager;
  public locations: LocationManager;
  public nodes: NodeManager;
  public nests: NestManager;

  constructor({
    apiKey,
    panelUrl,
    cache,
  }: {
    apiKey: string;
    panelUrl: URL;
    cache?: CacheTtlOptions;
  }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.servers = new ApplicationServerManager(
      this.httpClient,
      cache?.servers,
      cache?.databases,
    );
    this.users = new UserManager(this.httpClient, this.servers, cache?.users);
    this.locations = new LocationManager(this.httpClient, cache?.locations);
    this.nodes = new NodeManager(
      this.httpClient,
      cache?.nodes,
      cache?.allocations,
    );
    this.nests = new NestManager(this.httpClient, cache?.nests);
  }
}
