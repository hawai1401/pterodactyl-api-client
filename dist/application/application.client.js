import { HttpClient } from '../class/HttpClient.js';
import { LocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ApplicationServerManager } from './server/server.manager.js';
import { UserManager } from './user/user.manager.js';
export class ApplicationAPI {
    httpClient;
    panelUrl;
    users;
    servers;
    locations;
    nodes;
    nests;
    constructor({ apiKey, panelUrl, cache, }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.servers = new ApplicationServerManager(this.httpClient, cache?.servers, cache?.databases);
        this.users = new UserManager(this.httpClient, this.servers, cache?.users);
        this.locations = new LocationManager(this.httpClient, cache?.locations);
        this.nodes = new NodeManager(this.httpClient, cache?.nodes, cache?.allocations);
        this.nests = new NestManager(this.httpClient, cache?.nests, cache?.eggs);
    }
}
