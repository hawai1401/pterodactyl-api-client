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
    private httpClient;
    readonly panelUrl: URL;
    users: UsersClient;
    servers: ServersClient;
    locations: LocationsClient;
    nodes: NodesClient;
    nests: NestsClient;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    location(id: number): LocationClient;
    nest(id: number): NestClient;
    node(id: number): NodeClient;
    server(id: ApplicationServerId): ServerClient;
    user(id: UserId): UserClient;
}
//# sourceMappingURL=application.client.d.ts.map