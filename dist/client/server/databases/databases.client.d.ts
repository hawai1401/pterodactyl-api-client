import type { HttpClient } from '../../../class/HttpClient.js';
import type { CreateDatabasePayload, Database } from './databases.types.js';
export declare class DatabasesClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<Database[]>;
    create(payload: CreateDatabasePayload): Promise<Database<true>>;
}
//# sourceMappingURL=databases.client.d.ts.map