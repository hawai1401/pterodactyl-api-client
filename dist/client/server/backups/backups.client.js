import { createBackupSchema } from '../server.schemas.js';
export default class BackupsClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async list() {
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/backups`);
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
    async create(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/backups`, createBackupSchema.parse(options));
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
