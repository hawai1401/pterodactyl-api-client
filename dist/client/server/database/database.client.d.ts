import type HttpClient from "../../../class/HttpClient.js";
import type { CreateDatabaseArgs, DatabaseList } from "./database.types.js";
import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    private httpClient;
    password: PasswordClient;
    constructor(httpClient: HttpClient);
    list(id: string): Promise<DatabaseList>;
    create(id: string, options: CreateDatabaseArgs): Promise<{
        password: string;
        object: "server_database";
        attributes: import("./database.types.js").DatabaseAttributesWithPassword;
    }>;
    delete(id: string, database: string): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map