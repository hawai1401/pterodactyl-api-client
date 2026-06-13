import type { HttpClient } from '../../class/HttpClient.js';
import { DatabaseClient } from './database/database.client.js';
import type { ApplicationServerId, UpdateApplicationServerPayload } from './server.types.js';
import { DatabasesClient } from './databases/databases.client.js';
import type { ApplicationServer } from '../servers/servers.types.js';
export declare class ServerClient<Ids extends ApplicationServerId> {
    private httpClient;
    databases: Ids['id'] extends number ? DatabasesClient : never;
    readonly id: number | undefined;
    readonly external_id: string | undefined;
    constructor(httpClient: HttpClient, ids: Ids);
    database(database: number): DatabaseClient;
    fetch(): Promise<ApplicationServer>;
    update({ details, configuration, startup, }: UpdateApplicationServerPayload): Promise<ApplicationServer>;
    suspend(): Promise<void>;
    unsuspend(): Promise<void>;
    reinstall(): Promise<void>;
    delete(force?: boolean | undefined): Promise<void>;
}
//# sourceMappingURL=server.client.d.ts.map