import type { HttpClient } from '../../../class/HttpClient.js';
import type { Backup } from '../backups/backups.types.js';
import { LockClient } from './lock/lock.client.js';
import type { RestoreBackupPayload } from './backup.types.js';
export declare class BackupClient {
    private httpClient;
    readonly server: string;
    readonly backup: string;
    lock: LockClient;
    constructor(httpClient: HttpClient, server: string, backup: string);
    info(): Promise<Backup>;
    getDownloadUrl(): Promise<string>;
    delete(): Promise<void>;
    restore(payload?: RestoreBackupPayload): Promise<void>;
}
//# sourceMappingURL=backup.client.d.ts.map