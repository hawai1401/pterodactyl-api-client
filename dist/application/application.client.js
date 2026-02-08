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
export default class ApplicationAPI {
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
        this.users = new UsersClient(this.httpClient);
        this.servers = new ServersClient(this.httpClient);
        this.locations = new LocationsClient(this.httpClient);
        this.nodes = new NodesClient(this.httpClient);
        this.nests = new NestsClient(this.httpClient);
    }
    location(id) {
        return new LocationClient(this.httpClient, id);
    }
    nest(id) {
        return new NestClient(this.httpClient, id);
    }
    node(id) {
        return new NodeClient(this.httpClient, id);
    }
    server(id) {
        return new ServerClient(this.httpClient, id);
    }
    user(id) {
        return new UserClient(this.httpClient, id);
    }
}
