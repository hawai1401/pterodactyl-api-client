import type { BaseListArgs } from "../types.js";
import { Account } from "./account/index.js";
import { Server, type UserServerAttributes, type UserServerList } from "./server/index.js";
export default class ClientAPI {
    private httpClient;
    readonly panelUrl: URL;
    account: Account;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
    servers(options?: BaseListArgs & {
        filter?: {
            uuid?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            external_id?: string | undefined;
        };
    } | undefined): Promise<UserServerList<UserServerAttributes>>;
    server(id: string): Server;
}
//# sourceMappingURL=client.class.d.ts.map