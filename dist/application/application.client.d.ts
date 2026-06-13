import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { ServerClient } from './server/server.client.js';
import { ServersClient } from './servers/servers.client.js';
import type { ApplicationServerId } from './server/server.types.js';
import { ApplicationUserManager } from './user/user.manager.js';
import { NodeManager } from './node/node.manager.js';
export declare class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    users: ApplicationUserManager;
    servers: ServersClient;
    locations: ApplicationLocationManager;
    nodes: NodeManager;
    nests: NestManager;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    server<Ids extends ApplicationServerId>(id: Ids): ServerClient<Ids>;
}
//# sourceMappingURL=application.client.d.ts.map