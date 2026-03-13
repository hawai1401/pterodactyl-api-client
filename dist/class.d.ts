import { ApplicationAPI } from "./application/index.js";
import { ClientAPI } from "./client/index.js";
import type { role } from "./types.js";
export default class PterodactylAPIClient<T extends role> {
    private apiKey;
    readonly panelUrl: URL;
    readonly role: T;
    user: ClientAPI;
    constructor(options: {
        apiKey: string;
        panelUrl: string;
        role: T;
    });
    get admin(): T extends "admin" ? ApplicationAPI : never;
    /**
     * @deprecated Client is now typed, typescript will no longer throw errors if the role is admin
     */
    isAdmin(): this is {
        admin: ApplicationAPI;
    };
}
//# sourceMappingURL=class.d.ts.map