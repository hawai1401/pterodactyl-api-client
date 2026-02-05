import type HttpClient from "../../../class/HttpClient.js";
import type { CreateBackupArgs, DownloadBackupUrl, RestoreBackupArgs } from "./backup.types.js";
export default class BackupClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(id: string): Promise<{
        data: {
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
        }[];
        meta: {
            backup_count: number;
            pagination: import("../../../types.js").Pagination;
        };
        object: "list";
    }>;
    info(id: string, backup: string): Promise<{
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
    create(id: string, options: CreateBackupArgs): Promise<{
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
    download(id: string, backup: string): Promise<DownloadBackupUrl>;
    delete(id: string, backup: string): Promise<void>;
    restore(id: string, backup: string, options?: RestoreBackupArgs): Promise<void>;
}
//# sourceMappingURL=backup.client.d.ts.map