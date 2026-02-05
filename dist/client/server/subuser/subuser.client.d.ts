import type HttpClient from "../../../class/HttpClient.js";
import type { CreateSubuserArgs, EditSubuserArgs } from "./subuser.types.js";
export default class SubuserClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(id: string): Promise<{
        data: {
            attributes: {
                created_at: Date;
                uuid: string;
                username: string;
                email: string;
                image: string;
                "2fa_enabled": boolean;
                permissions: import("../server.types.js").ServerPermissions[];
            };
            object: "server_subuser";
        }[];
        object: "list";
    }>;
    info(id: string, subuser: string): Promise<{
        attributes: {
            created_at: Date;
            uuid: string;
            username: string;
            email: string;
            image: string;
            "2fa_enabled": boolean;
            permissions: import("../server.types.js").ServerPermissions[];
        };
        object: "server_subuser";
    }>;
    create(id: string, options: CreateSubuserArgs): Promise<{
        attributes: {
            created_at: Date;
            uuid: string;
            username: string;
            email: string;
            image: string;
            "2fa_enabled": boolean;
            permissions: import("../server.types.js").ServerPermissions[];
        };
        object: "server_subuser";
    }>;
    edit(id: string, subuser: string, options: EditSubuserArgs): Promise<{
        attributes: {
            created_at: Date;
            uuid: string;
            username: string;
            email: string;
            image: string;
            "2fa_enabled": boolean;
            permissions: import("../server.types.js").ServerPermissions[];
        };
        object: "server_subuser";
    }>;
    delete(id: string, subuser: string): Promise<void>;
}
//# sourceMappingURL=subuser.client.d.ts.map