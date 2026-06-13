import type { HttpClient } from '../../../class/HttpClient.js';
import type { CreateBackupPayload as CreateBackupPayload, Backup, BackupList } from './backups.types.js';
export declare class BackupsClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<BackupList>;
    create(payload?: CreateBackupPayload): Promise<Backup>;
}
//# sourceMappingURL=backups.client.d.ts.map