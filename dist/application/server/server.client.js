import { DatabaseClient } from './database/database.client.js';
import { applicationServerIdSchema, editApplicationServerConfigurationSchema, editApplicationServerDetailsSchema, editApplicationServerStartupSchema, } from './server.schemas.js';
import { DatabasesClient } from './databases/databases.client.js';
export class ServerClient {
    httpClient;
    id;
    external_id;
    constructor(httpClient, ids) {
        this.httpClient = httpClient;
        const { id, external_id } = applicationServerIdSchema.parse(ids);
        this.id = id;
        this.external_id = external_id;
        if (id)
            this.databases = new DatabasesClient(httpClient, id);
    }
    database(database) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return new DatabaseClient(this.httpClient, this.id, database);
    }
    async fetch() {
        const serverObject = await this.httpClient.request('GET', `/application/servers/${this.id ?? `external/${this.external_id}`}`, { parseDates: true });
        return serverObject.attributes;
    }
    async edit({ details, configuration, startup, }) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        const basePath = `/application/servers/${this.id}`;
        const updates = [
            {
                data: details,
                endpoint: 'details',
                schema: editApplicationServerDetailsSchema,
            },
            {
                data: configuration,
                endpoint: 'build',
                schema: editApplicationServerConfigurationSchema,
            },
            {
                data: startup,
                endpoint: 'startup',
                schema: editApplicationServerStartupSchema,
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
        return serverObject.attributes;
    }
    suspend() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request('POST', `/application/servers/${this.id}/suspend`);
    }
    unsuspend() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request('POST', `/application/servers/${this.id}/unsuspend`);
    }
    reinstall() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request('POST', `/application/servers/${this.id}/reinstall`);
    }
    delete(force) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request('DELETE', `/application/servers/${this.id}${force ? '?force=true' : ''}`);
    }
}
