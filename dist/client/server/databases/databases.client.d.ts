import type HttpClient from '../../../class/HttpClient.js';
import type { CreateDatabaseArgs, DatabaseList } from '../database.types.js';
export default class DatabasesClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    list(): Promise<DatabaseList>;
    create(options: CreateDatabaseArgs): Promise<{
        password: string;
        object: "server_database";
        attributes: import("../database.types.js").DatabaseAttributesWithPassword;
    }>;
}
//# sourceMappingURL=databases.client.d.ts.map