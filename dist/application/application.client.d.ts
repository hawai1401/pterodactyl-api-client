import { LocationManager } from './location/location.manager.js';
import { NestManager } from './nest/nest.manager.js';
import { NodeManager } from './node/node.manager.js';
import { ServerManager } from './server/server.manager.js';
import { UserManager } from './user/user.manager.js';
import type { CacheTtlOptions } from '../types.js';
export declare class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    users: UserManager;
    servers: ServerManager;
    locations: LocationManager;
    nodes: NodeManager;
    nests: NestManager;
    constructor({ apiKey, panelUrl, cache, }: {
        apiKey: string;
        panelUrl: URL;
        cache?: CacheTtlOptions;
    });
}
//# sourceMappingURL=application.client.d.ts.map