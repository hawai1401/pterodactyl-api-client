import { ApplicationLocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ApplicationServerManager } from './server/server.manager.js';
import { ApplicationUserManager } from './user/user.manager.js';
export declare class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    users: ApplicationUserManager;
    servers: ApplicationServerManager;
    locations: ApplicationLocationManager;
    nodes: NodeManager;
    nests: NestManager;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
}
//# sourceMappingURL=application.client.d.ts.map