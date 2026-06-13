import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createServerSchema, listServersFilterSchema, applicationServerIdSchema, applicationServerId, applicationServerExternalId, } from './server.schemas.js';
import { ApplicationServer } from './server.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class ApplicationServerManager extends BaseCacheManager {
    httpClient;
    databasesTtl;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5, databasesTtl) {
        super(cacheTtl, 'id', 'externalId');
        this.httpClient = httpClient;
        this.databasesTtl = databasesTtl;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: listServersFilterSchema.optional().parse(options?.filter),
        });
        const serverObjectList = await this.httpClient.request('GET', `/application/servers?${queries}`, { parseDates: true });
        return {
            data: serverObjectList.data.map((serverObject) => this.setCache(new ApplicationServer(this.httpClient, this, serverObject.attributes, this.databasesTtl), options?.cache)),
            pagination: serverObjectList.meta.pagination,
        };
    }
    async fetch(server, options) {
        const cacheServer = (server.id && this.getCache(server.id)) ??
            (server.external_id && this.getCache(server.external_id));
        if (cacheServer && !options?.force)
            return cacheServer;
        return this.setCache(new ApplicationServer(this.httpClient, this, (await this.httpClient.request('GET', `/application/servers/${((s) => s.id ?? `external/${s.external_id}`)(applicationServerIdSchema.parse(server))}`, { parseDates: true })).attributes, this.databasesTtl), options?.cache);
    }
    resolve(server) {
        return super.resolve(server, () => {
            if (typeof server === 'number') {
                return new ApplicationServer(this.httpClient, this, {
                    id: applicationServerId.parse(server),
                }, this.databasesTtl);
            }
            else {
                return new ApplicationServer(this.httpClient, this, {
                    id: undefined,
                    externalId: applicationServerExternalId.parse(server),
                }, this.databasesTtl);
            }
        });
    }
    async create(payload, options) {
        return this.setCache(new ApplicationServer(this.httpClient, this, (await this.httpClient.request('POST', '/application/servers', createServerSchema.parse(payload), {
            parseDates: true,
        })).attributes, this.databasesTtl), options?.cache);
    }
}
