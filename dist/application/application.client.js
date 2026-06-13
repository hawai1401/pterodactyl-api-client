import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeClient } from './node/node.client.js';
import { NodesClient } from './nodes/nodes.client.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import { ApplicationUserManager } from './user/user.manager.js';
export class ApplicationAPI {
    httpClient;
    panelUrl;
    users;
    servers;
    locations;
    nodes;
    nests;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.users = new ApplicationUserManager(this.httpClient);
        this.servers = new ServersClient(this.httpClient);
        this.locations = new ApplicationLocationManager(this.httpClient);
        this.nodes = new NodesClient(this.httpClient);
        this.nests = new NestManager(this.httpClient);
    }
    node(id) {
        return new NodeClient(this.httpClient, id);
    }
    server(id) {
        return new ServerClient(this.httpClient, id);
    }
}
