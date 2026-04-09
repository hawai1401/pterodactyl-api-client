import type HttpClient from '../../../class/HttpClient.js';
import type { CreateSubuserArgs } from '../subuser.types.js';
export default class SubusersClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    list(): Promise<{
        data: {
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
        }[];
        object: "list";
    }>;
    create(options: CreateSubuserArgs): Promise<{
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
}
//# sourceMappingURL=subusers.client.d.ts.map