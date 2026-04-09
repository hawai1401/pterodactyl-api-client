import type HttpClient from '../../../class/HttpClient.js';
import { restoreBackupSchema, userServerBackupId } from '../server.schemas.js';
import type {
  Backup,
  DownloadBackupUrl,
  RestoreBackupArgs,
} from '../backup.types.js';
import LockClient from './lock/lock.client.js';

export default class BackupClient {
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

  async info() {
    const res = await this.httpClient.request<Backup<string>>(
      'GET',
      `/client/servers/${this.server}/backups/${this.backup}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        completed_at: res.attributes.completed_at
          ? new Date(res.attributes.completed_at)
          : null,
      },
    };
  }

  download() {
    return this.httpClient.request<DownloadBackupUrl>(
      'GET',
      `/client/servers/${this.server}/backups/${this.backup}/download`,
    );
  }

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/backups/${this.backup}`,
    );
  }

  restore(options: RestoreBackupArgs = {}) {
    return this.httpClient.request<void, RestoreBackupArgs>(
      'POST',
      `/client/servers/${this.server}/backups/${this.backup}/restore`,
      restoreBackupSchema.parse(options),
    );
  }
}
