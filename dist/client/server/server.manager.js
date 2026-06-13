import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { ClientServer } from './server.class.js';
import { userServerFilterSchema } from '../client.schema.js';
import { userServerId } from './server.schemas.js';
export class ClientServerManager extends BaseCacheManager {
    httpClient;
    panelUrl;
    constructor(httpClient, panelUrl, cacheTtl = ONE_MINUTE_IN_MILLISECONDS * 5) {
        super(cacheTtl, 'id');
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
    }
    async list(options) {
        const queries = buildQueryParams({
            ...options,
            filter: userServerFilterSchema.optional().parse(options?.filter),
        });
        const serverList = await this.httpClient.request('GET', `/client?${queries}`, { parseDates: true });
        return {
            data: serverList.data.map((serverObject) => this.setCache(new ClientServer(this.httpClient, this.panelUrl, this, serverObject.attributes), options?.cache)),
            pagination: serverList.meta.pagination,
        };
    }
    async fetch(id, options) {
        const cacheServer = this.getCache(id);
        if (cacheServer && !options?.force)
            return cacheServer;
        const parsedId = userServerId.parse(id);
        const serverObject = await this.httpClient.request('GET', `/client/servers/${parsedId}`, { parseDates: true });
        return this.setCache(new ClientServer(this.httpClient, this.panelUrl, this, serverObject.attributes), options?.cache);
    }
    resolve(id) {
        return super.resolve(id, () => new ClientServer(this.httpClient, this.panelUrl, this, {
            identifier: userServerId.parse(id),
        }));
    }
}
