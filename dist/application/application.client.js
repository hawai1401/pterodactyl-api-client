import { HttpClient } from '../class/HttpClient.js';
import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ApplicationServerManager } from './server/server.manager.js';
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
        this.servers = new ApplicationServerManager(this.httpClient);
        this.users = new ApplicationUserManager(this.httpClient, this.servers);
        this.locations = new ApplicationLocationManager(this.httpClient);
        this.nodes = new NodeManager(this.httpClient);
        this.nests = new NestManager(this.httpClient);
    }
}
