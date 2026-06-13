import type { HttpClient } from '../../../class/HttpClient.js';
import { restoreBackupSchema, userServerBackupId } from '../server.schemas.js';
import type { Backup, BackupObject } from '../backups/backups.types.js';
import { LockClient } from './lock/lock.client.js';
import type {
  DownloadBackupData,
  RestoreBackupPayload,
} from './backup.types.js';

export class BackupClient {
  readonly backup: string;
  public lock: LockClient;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    backup: string,
  ) {
    this.backup = userServerBackupId.parse(backup);
    this.lock = new LockClient(httpClient, server, backup);
  }

  async info(): Promise<Backup> {
    const backupObject = await this.httpClient.request<BackupObject>(
      'GET',
      `/client/servers/${this.server}/backups/${this.backup}`,
      { parseDates: true },
    );
    return backupObject.attributes;
  }

  async getDownloadUrl(): Promise<string> {
    const downloadBackupData =
      await this.httpClient.request<DownloadBackupData>(
        'GET',
        `/client/servers/${this.server}/backups/${this.backup}/download`,
      );
    return downloadBackupData.attributes.url;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/backups/${this.backup}`,
    );
  }

  restore(payload?: RestoreBackupPayload) {
    return this.httpClient.request<void, RestoreBackupPayload>(
      'POST',
      `/client/servers/${this.server}/backups/${this.backup}/restore`,
      restoreBackupSchema.optional().parse(payload),
    );
  }
}
