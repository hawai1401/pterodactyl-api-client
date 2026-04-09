import type { BaseArgs, List, Pagination, Tuple } from '../../types.js';
export interface BackupList<N extends number = number> extends List {
    data: Tuple<Backup<string>, N>;
    meta: {
        backup_count: N;
        pagination: Pagination;
    };
}
export interface CreateBackupArgs extends BaseArgs {
    name?: string | undefined;
    ignored?: string | undefined;
    is_locked?: boolean | undefined;
}
export interface RestoreBackupArgs extends BaseArgs {
    truncate?: boolean | undefined;
}
export interface DownloadBackupUrl {
    object: 'signed_url';
    attributes: {
        url: string;
    };
}
export interface Backup<T extends string | Date> {
    object: 'backup';
    attributes: {
        uuid: string;
        name: string;
        ignored_files: string[];
        checksum: null | string;
        bytes: number;
        created_at: T;
        completed_at: null | T;
        is_successful: null | boolean;
        is_locked: boolean;
    };
}
//# sourceMappingURL=backup.types.d.ts.map