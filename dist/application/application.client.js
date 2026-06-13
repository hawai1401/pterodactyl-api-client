import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import { ApplicationUserManager } from './user/user.manager.js';
import { NodeManager } from './node/node.manager.js';
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
        this.nodes = new NodeManager(this.httpClient);
        this.nests = new NestManager(this.httpClient);
    }
    server(id) {
        return new ServerClient(this.httpClient, id);
    }
}
