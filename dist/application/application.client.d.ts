import { ApplicationLocationManager } from './location/location.manager.js';
import { NestClient } from './nest/nest.client.js';
import { NestsClient } from './nests/nests.client.js';
import { NodeClient } from './node/node.client.js';
import { NodesClient } from './nodes/nodes.client.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import type { ApplicationServerId } from './server/server.types.js';
import { ApplicationUserManager } from './user/user.manager.js';
export declare class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    users: ApplicationUserManager;
    servers: ServersClient;
    locations: ApplicationLocationManager;
    nodes: NodesClient;
    nests: NestsClient;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    nest(id: number): NestClient;
    node(id: number): NodeClient;
    server<Ids extends ApplicationServerId>(id: Ids): ServerClient<Ids>;
}
//# sourceMappingURL=application.client.d.ts.map