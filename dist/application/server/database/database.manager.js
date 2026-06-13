import { applicationServerDatabaseId, createApplicationDatabaseSchema, } from '../server.schemas.js';
import { ApplicationServerDatabase } from './database.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';
export class ApplicationServerDatabaseManager extends BaseCacheManager {
    httpClient;
    serverId;
    constructor(httpClient, serverId, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.serverId = serverId;
    }
    async list(options) {
        const databaseObjectList = await this.httpClient.request('GET', `/application/servers/${this.serverId}/databases`, {
            parseDates: true,
        });
        return databaseObjectList.data.map((databaseObject) => this.setCache(new ApplicationServerDatabase(this.httpClient, this, databaseObject.attributes), options?.cache));
    }
    async fetch(id, options) {
        const cacheDatabase = this.getCache(id);
        if (cacheDatabase && !options?.force)
            return cacheDatabase;
        const parsedId = applicationServerDatabaseId.parse(id);
        const databaseObject = await this.httpClient.request('GET', `/application/servers/${this.serverId}/databases/${parsedId}`, { parseDates: true });
        return this.setCache(new ApplicationServerDatabase(this.httpClient, this, databaseObject.attributes), options?.cache);
    }
    resolve(id) {
        return (this.getCache(id) ??
            new ApplicationServerDatabase(this.httpClient, this, {
                id: applicationServerDatabaseId.parse(id),
                server: this.serverId,
            }));
    }
    async create(payload, options) {
        const databaseObject = await this.httpClient.request('POST', `/application/servers/${this.serverId}/databases`, createApplicationDatabaseSchema.parse(payload), { parseDates: true });
        return this.setCache(new ApplicationServerDatabase(this.httpClient, this, databaseObject.attributes), options?.cache);
    }
}
