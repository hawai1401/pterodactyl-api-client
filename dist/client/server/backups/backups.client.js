import { createBackupSchema } from '../server.schemas.js';
export class BackupsClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const backupObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/backups`, { parseDates: true });
        return {
            data: backupObjectList.data.map((backupObject) => backupObject.attributes),
            pagination: backupObjectList.meta.pagination,
            count: backupObjectList.meta.backupCount,
        };
    }
    async create(payload) {
        const backupObject = await this.httpClient.request('POST', `/client/servers/${this.server}/backups`, createBackupSchema.optional().parse(payload), { parseDates: true });
        return backupObject.attributes;
    }
}
