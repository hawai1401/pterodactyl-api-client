import { restoreBackupSchema, userServerBackupId } from '../server.schemas.js';
import { LockClient } from './lock/lock.client.js';
export class BackupClient {
    httpClient;
    server;
    backup;
    lock;
    constructor(httpClient, server, backup) {
        this.httpClient = httpClient;
        this.server = server;
        this.backup = userServerBackupId.parse(backup);
        this.lock = new LockClient(httpClient, server, backup);
    }
    async info() {
        const backupObject = await this.httpClient.request('GET', `/client/servers/${this.server}/backups/${this.backup}`, { parseDates: true });
        return backupObject.attributes;
    }
    async getDownloadUrl() {
        const downloadBackupData = await this.httpClient.request('GET', `/client/servers/${this.server}/backups/${this.backup}/download`);
        return downloadBackupData.attributes.url;
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/backups/${this.backup}`);
    }
    restore(payload) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/backups/${this.backup}/restore`, restoreBackupSchema.optional().parse(payload));
    }
}
