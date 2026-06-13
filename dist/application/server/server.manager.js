import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { createServerSchema, listServersFilterSchema, applicationServerIdSchema, applicationServerId, applicationServerExternalId, } from './server.schemas.js';
import { ApplicationServer } from './server.class.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export class ApplicationServerManager extends BaseCacheManager {
    httpClient;
    constructor(httpClient, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id', 'externalId');
        this.httpClient = httpClient;
    }
    async list(options) {
        const filter = listServersFilterSchema.optional().parse(options?.filter);
        const queries = buildQueryParams({
            ...options,
            filter,
        });
        const serverObjectList = await this.httpClient.request('GET', `/application/servers?${queries}`, { parseDates: true });
        return {
            data: serverObjectList.data.map((serverObject) => this.setCache(new ApplicationServer(this.httpClient, this, serverObject.attributes), options?.cache)),
            pagination: serverObjectList.meta.pagination,
        };
    }
    async fetch(server, options) {
        const cacheServer = (server.id && this.getCache(server.id)) ??
            (server.external_id && this.getCache(server.external_id));
        if (cacheServer && !options?.force)
            return cacheServer;
        const { id, external_id } = applicationServerIdSchema.parse(server);
        const serverObject = await this.httpClient.request('GET', `/application/servers/${id ?? `external/${external_id}`}`, { parseDates: true });
        return this.setCache(new ApplicationServer(this.httpClient, this, serverObject.attributes), options?.cache);
    }
    resolve(server) {
        const cacheServer = this.getCache(server);
        if (cacheServer)
            return cacheServer;
        if (typeof server === 'number') {
            return new ApplicationServer(this.httpClient, this, {
                id: applicationServerId.parse(server),
            });
        }
        else {
            return new ApplicationServer(this.httpClient, this, {
                id: undefined,
                externalId: applicationServerExternalId.parse(server),
            });
        }
    }
    async create(payload, options) {
        const serverObject = await this.httpClient.request('POST', '/application/servers', createServerSchema.parse(payload), {
            parseDates: true,
        });
        return this.setCache(new ApplicationServer(this.httpClient, this, serverObject.attributes), options?.cache);
    }
}
