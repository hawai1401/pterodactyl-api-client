import type HttpClient from "../../../class/HttpClient.js";
import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    private httpClient;
    readonly server: number;
    password: PasswordClient;
    readonly id: number;
    constructor(httpClient: HttpClient, server: number, database: number);
    info(): Promise<{
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
    }>;
    delete(): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map