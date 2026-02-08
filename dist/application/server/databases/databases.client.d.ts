import type HttpClient from "../../../class/HttpClient.js";
import type { CreateApplicationDatabase } from "./databases.types.js";
export default class DatabasesClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(server: number): Promise<{
        data: {
            attributes: {
                created_at: Date;
                updated_at: Date;
                id: number;
                server: number;
                host: number;
                database: string;
                username: string;
                remote: string | import("../../../types.js").IP | "%";
                max_connections: number;
            };
            object: "server_database";
        }[];
        object: "list";
    }>;
    create(server: number, args: CreateApplicationDatabase): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            server: number;
            host: number;
            database: string;
            username: string;
            remote: string | import("../../../types.js").IP | "%";
            max_connections: number;
        };
        meta: {
            ressource: string;
        };
        object: "server_database";
    }>;
}
//# sourceMappingURL=databases.client.d.ts.map