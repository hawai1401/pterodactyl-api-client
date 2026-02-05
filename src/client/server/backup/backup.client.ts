import type HttpClient from "../../../class/HttpClient.js";
import {
  createBackupSchema,
  restoreBackupSchema,
  userServerBackupId,
  userServerId,
} from "../server.schemas.js";
import type {
  Backup,
  BackupList,
  CreateBackupArgs,
  DownloadBackupUrl,
  RestoreBackupArgs,
} from "./backup.types.js";

export default class BackupClient {
  constructor(private httpClient: HttpClient) {}

  async list(id: string) {
    const res = await this.httpClient.request<BackupList>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/backups`,
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

  async info(id: string, backup: string) {
    const res = await this.httpClient.request<Backup<string>>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}`,
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

  async create(id: string, options: CreateBackupArgs) {
    const res = await this.httpClient.request<Backup<string>, CreateBackupArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/backups`,
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

  download(id: string, backup: string) {
    return this.httpClient.request<DownloadBackupUrl>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/download`,
    );
  }

  delete(id: string, backup: string) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}`,
    );
  }

  restore(id: string, backup: string, options: RestoreBackupArgs = {}) {
    return this.httpClient.request<void, RestoreBackupArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/restore`,
      restoreBackupSchema.parse(options),
    );
  }
}
