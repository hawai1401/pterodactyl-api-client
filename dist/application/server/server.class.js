import { setManagerCacheSymbol, removeManagerCacheSymbol, } from '../../symbols.js';
import { setApplicationServerDetailsSchema, setApplicationServerConfigurationSchema, setApplicationServerStartupSchema, } from './server.schemas.js';
import { ApplicationServerDatabaseManager } from './database/database.manager.js';
export class ApplicationServer {
    httpClient;
    serverManager;
    id;
    externalId;
    uuid;
    identifier;
    name;
    description;
    suspended;
    limits;
    featureLimits;
    user;
    node;
    allocation;
    nest;
    egg;
    container;
    updatedAt;
    createdAt;
    databases;
    constructor(httpClient, serverManager, data) {
        this.httpClient = httpClient;
        this.serverManager = serverManager;
        Object.assign(this, data);
        if (this.id) {
            this.databases = new ApplicationServerDatabaseManager(this.httpClient, this.id);
        }
    }
    async fetch(options) {
        const serverObject = await this.httpClient.request('GET', `/application/servers/${this.id ?? `external/${this.externalId}`}`, { parseDates: true });
        Object.assign(this, serverObject.attributes);
        if (this.id && !this.databases) {
            this.databases = new ApplicationServerDatabaseManager(this.httpClient, this.id);
        }
        this.serverManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async update(payload, options) {
        const { details, configuration, startup } = payload;
        const basePath = `/application/servers/${this.id}`;
        const updates = [
            {
                data: details,
                endpoint: 'details',
                schema: setApplicationServerDetailsSchema,
            },
            {
                data: configuration,
                endpoint: 'build',
                schema: setApplicationServerConfigurationSchema,
            },
            {
                data: startup,
                endpoint: 'startup',
                schema: setApplicationServerStartupSchema,
            },
        ];
        const requests = updates
            .filter(({ data }) => !!data)
            .map(({ data, endpoint, schema }) => this.httpClient.request('PATCH', `${basePath}/${endpoint}`, schema.parse(data), {
            parseDates: true,
        }));
        if (requests.length === 0)
            throw new Error('Aucunes modifications spécifiées !');
        const [serverObject] = await Promise.all(requests);
        Object.assign(this, serverObject.attributes);
        if (this.id && !this.databases) {
            this.databases = new ApplicationServerDatabaseManager(this.httpClient, this.id);
        }
        this.serverManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    async suspend() {
        await this.httpClient.request('POST', `/application/servers/${this.id}/suspend`);
    }
    async unsuspend() {
        await this.httpClient.request('POST', `/application/servers/${this.id}/unsuspend`);
    }
    async reinstall() {
        await this.httpClient.request('POST', `/application/servers/${this.id}/reinstall`);
    }
    async delete(force) {
        this.serverManager[removeManagerCacheSymbol](this.id);
        if (this.externalId)
            this.serverManager[removeManagerCacheSymbol](this.externalId);
        await this.httpClient.request('DELETE', `/application/servers/${this.id}${force ? '?force=true' : ''}`);
    }
}
