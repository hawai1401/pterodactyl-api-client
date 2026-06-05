import type {
  BasePayload,
  ApiPagination,
  Tuple,
  Paginated,
} from '../../../types.js';

export interface BackupObjectList<N extends number = number> {
  object: 'list';
  data: Tuple<BackupObject, N>;
  meta: {
    backup_count: N;
    pagination: ApiPagination;
  };
}

export interface CreateBackupPayload extends BasePayload {
  name?: string | undefined;
  ignored?: string | undefined;
  is_locked?: boolean | undefined;
}

export interface BackupObject {
  object: 'backup';
  attributes: {
    uuid: string;
    name: string;
    ignored_files: string[];
    checksum: null | string;
    bytes: number;
    created_at: Date;
    completed_at: null | Date;
    is_successful: null | boolean;
    is_locked: boolean;
  };
}

export interface Backup {
  uuid: string;
  name: string;
  ignoredFiles: string[];
  checksum: string | null;
  bytes: number;
  createdAt: Date;
  completedAt: Date | null;
  isSuccessful: boolean | null;
  isLocked: boolean;
}
export interface BackupList extends Paginated<Backup> {
  count: number;
}
