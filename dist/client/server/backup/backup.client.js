import { restoreBackupSchema, userServerBackupId } from '../server.schemas.js';
import LockClient from './lock/lock.client.js';
export default class BackupClient {
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
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/backups/${this.backup}`);
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
        return this.httpClient.request('GET', `/client/servers/${this.server}/backups/${this.backup}/download`);
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/backups/${this.backup}`);
    }
    restore(options = {}) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/backups/${this.backup}/restore`, restoreBackupSchema.parse(options));
    }
}
