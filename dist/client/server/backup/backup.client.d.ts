import type HttpClient from '../../../class/HttpClient.js';
import type { DownloadBackupUrl, RestoreBackupArgs } from '../backup.types.js';
import LockClient from './lock/lock.client.js';
export default class BackupClient {
    private httpClient;
    readonly server: string;
    readonly backup: string;
    lock: LockClient;
    constructor(httpClient: HttpClient, server: string, backup: string);
    info(): Promise<{
        attributes: {
            created_at: Date;
            completed_at: Date | null;
            uuid: string;
            name: string;
            ignored_files: string[];
            checksum: null | string;
            bytes: number;
            is_successful: null | boolean;
            is_locked: boolean;
        };
        object: "backup";
    }>;
    download(): Promise<DownloadBackupUrl>;
    delete(): Promise<void>;
    restore(options?: RestoreBackupArgs): Promise<void>;
}
//# sourceMappingURL=backup.client.d.ts.map