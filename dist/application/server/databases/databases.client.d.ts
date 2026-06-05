import type { HttpClient } from '../../../class/HttpClient.js';
import type { ApplicationDatabase, CreateApplicationDatabase as CreateApplicationDatabasePayload } from './databases.types.js';
export declare class DatabasesClient {
    private httpClient;
    readonly server: number;
    constructor(httpClient: HttpClient, server: number);
    fetch(): Promise<ApplicationDatabase[]>;
    create(payload: CreateApplicationDatabasePayload): Promise<ApplicationDatabase>;
}
//# sourceMappingURL=databases.client.d.ts.map