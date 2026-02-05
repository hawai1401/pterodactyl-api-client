import { createBackupSchema, restoreBackupSchema, userServerBackupId, userServerId, } from "../server.schemas.js";
export default class BackupClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/backups`);
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
    async info(id, backup) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}`);
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
    async create(id, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/backups`, createBackupSchema.parse(options));
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
    download(id, backup) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/download`);
    }
    delete(id, backup) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}`);
    }
    restore(id, backup, options = {}) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/restore`, restoreBackupSchema.parse(options));
    }
}
