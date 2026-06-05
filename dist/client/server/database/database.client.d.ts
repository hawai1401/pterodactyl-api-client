import type { HttpClient } from '../../../class/HttpClient.js';
import { UserServerDatabaseClient } from './password/password.client.js';
export declare class DatabaseClient {
    private httpClient;
    readonly server: string;
    password: UserServerDatabaseClient;
    readonly database: string;
    constructor(httpClient: HttpClient, server: string, database: string);
    delete(): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map