import type HttpClient from '../../../class/HttpClient.js';
import { createBackupSchema } from '../server.schemas.js';
import type { Backup, BackupList, CreateBackupArgs } from '../backup.types.js';

export default class BackupsClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async list() {
    const res = await this.httpClient.request<BackupList>(
      'GET',
      `/client/servers/${this.server}/backups`,
    );
    return {
      ...res,
      data: res.data.map((backup) => ({
        ...backup,
        attributes: {
          ...backup.attributes,
          created_at: new Date(backup.attributes.created_at),
          completed_at: backup.attributes.completed_at
            ? new Date(backup.attributes.completed_at)
            : null,
        },
      })),
    };
  }

  async create(options: CreateBackupArgs) {
    const res = await this.httpClient.request<Backup<string>, CreateBackupArgs>(
      'POST',
      `/client/servers/${this.server}/backups`,
      createBackupSchema.parse(options),
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
}
