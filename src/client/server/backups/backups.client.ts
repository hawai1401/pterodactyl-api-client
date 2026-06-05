import type { HttpClient } from '../../../class/HttpClient.js';
import { createBackupSchema } from '../server.schemas.js';
import type {
  BackupObject,
  BackupObjectList,
  CreateBackupPayload as CreateBackupPayload,
  Backup,
  BackupList,
} from './backups.types.js';

export class BackupsClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<BackupList> {
    const backupObjectList = await this.httpClient.request<BackupObjectList>(
      'GET',
      `/client/servers/${this.server}/backups`,
      { parseDates: true },
    );
    return {
      data: backupObjectList.data.map(
        (backupObject) => backupObject.attributes,
      ),
      pagination: backupObjectList.meta.pagination,
      count: backupObjectList.meta.backupCount,
    };
  }

  async create(payload?: CreateBackupPayload): Promise<Backup> {
    const backupObject = await this.httpClient.request<
      BackupObject,
      CreateBackupPayload
    >(
      'POST',
      `/client/servers/${this.server}/backups`,
      createBackupSchema.optional().parse(payload),
      { parseDates: true },
    );
    return backupObject.attributes;
  }
}
