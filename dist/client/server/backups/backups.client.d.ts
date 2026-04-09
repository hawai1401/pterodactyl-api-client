import type HttpClient from '../../../class/HttpClient.js';
import type { CreateBackupArgs } from '../backup.types.js';
export default class BackupsClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    list(): Promise<{
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
    create(options: CreateBackupArgs): Promise<{
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
}
//# sourceMappingURL=backups.client.d.ts.map