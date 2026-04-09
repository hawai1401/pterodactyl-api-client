import { createApiKeySchema, deleteApiKeySchema } from '../account.schemas.js';
export default class ApiKeyClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request('GET', '/client/account/api-keys');
        return {
            ...res,
            data: res.data.map((apiKey) => ({
                ...apiKey,
                attributes: {
                    ...apiKey.attributes,
                    last_used_at: new Date(apiKey.attributes.last_used_at),
                    created_at: new Date(apiKey.attributes.created_at),
                },
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request('POST', '/client/account/api-keys', createApiKeySchema.parse(options));
        return {
            ...res,
            api_key: `${res.attributes.identifier}${res.meta.secret_token}`,
        };
    }
    delete(options) {
        const { identifier } = deleteApiKeySchema.parse(options);
        return this.httpClient.request('DELETE', `/client/account/api-keys/${identifier}`);
    }
}
