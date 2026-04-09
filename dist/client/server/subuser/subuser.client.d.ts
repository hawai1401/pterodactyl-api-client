import type HttpClient from '../../../class/HttpClient.js';
import type { EditSubuserArgs } from '../subuser.types.js';
export default class SubuserClient {
    private httpClient;
    readonly server: string;
    readonly subuser: string;
    constructor(httpClient: HttpClient, server: string, subuser: string);
    info(): Promise<{
        attributes: {
            created_at: Date;
            uuid: string;
            username: string;
            email: string;
            image: string;
            '2fa_enabled': boolean;
            permissions: import("../server.types.js").ServerPermissions[];
        };
        object: "server_subuser";
    }>;
    edit(options: EditSubuserArgs): Promise<{
        attributes: {
            created_at: Date;
            uuid: string;
            username: string;
            email: string;
            image: string;
            '2fa_enabled': boolean;
            permissions: import("../server.types.js").ServerPermissions[];
        };
        object: "server_subuser";
    }>;
    delete(): Promise<void>;
}
//# sourceMappingURL=subuser.client.d.ts.map