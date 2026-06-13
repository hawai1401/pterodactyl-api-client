import { AccountClient } from './account/account.client.js';
import { ClientServerManager } from './server/server.manager.js';
export declare class ClientAPI {
    private httpClient;
    readonly panelUrl: URL;
    account: AccountClient;
    servers: ClientServerManager;
    constructor({ apiKey, panelUrl, cacheTtl, }: {
        apiKey: string;
        panelUrl: URL;
        cacheTtl?: number | undefined;
    });
}
//# sourceMappingURL=client.class.d.ts.map