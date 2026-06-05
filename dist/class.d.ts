import { ApplicationAPI } from './application/application.client.js';
import { ClientAPI } from './client/client.class.js';
import type { AccountRole } from './types.js';
export declare class PterodactylAPIClient<T extends AccountRole> {
    private apiKey;
    readonly panelUrl: URL;
    readonly role: T;
    user: ClientAPI;
    admin: T extends 'admin' ? ApplicationAPI : never;
    constructor(options: {
        apiKey: string;
        panelUrl: string;
        role: T;
    });
}
//# sourceMappingURL=class.d.ts.map