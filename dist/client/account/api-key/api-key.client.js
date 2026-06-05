import { createApiKeySchema, deleteApiKeySchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class ApiKeyClient extends BaseClient {
    async fetch() {
        const apiKeyObjectList = await this.httpClient.request('GET', '/client/account/api-keys', { parseDates: true });
        return apiKeyObjectList.data.map((apiKeyObject) => apiKeyObject.attributes);
    }
    async create(payload) {
        const createdApiKeyObject = await this.httpClient.request('POST', '/client/account/api-keys', createApiKeySchema.parse(payload), {
            parseDates: true,
        });
        return {
            ...createdApiKeyObject.attributes,
            key: `${createdApiKeyObject.attributes.identifier}${createdApiKeyObject.meta.secretToken}`,
        };
    }
    delete(payload) {
        const { identifier } = deleteApiKeySchema.parse(payload);
        return this.httpClient.request('DELETE', `/client/account/api-keys/${identifier}`);
    }
}
