import type { HttpClient } from '../../../class/HttpClient.js';
import type { ApplicationDatabase } from '../databases/databases.types.js';
import { ApplicationServerDatabaseClient } from './password/password.client.js';
export declare class DatabaseClient {
    private httpClient;
    readonly server: number;
    password: ApplicationServerDatabaseClient;
    readonly id: number;
    constructor(httpClient: HttpClient, server: number, database: number);
    fetch(): Promise<ApplicationDatabase>;
    delete(): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map