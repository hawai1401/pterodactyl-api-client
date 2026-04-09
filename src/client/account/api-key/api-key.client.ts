import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import { createApiKeySchema, deleteApiKeySchema } from '../account.schemas.js';
import type {
  ApiKeysRaw,
  CreateApiKeyArgs,
  CreatedApiKey,
  DeleteApiKeyArgs,
} from './api-key.types.js';

export default class ApiKeyClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<ApiKeysRaw>(
      'GET',
      '/client/account/api-keys',
    );
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

  async create(options: CreateApiKeyArgs) {
    const res = await this.httpClient.request<
      CreatedApiKey,
      z.infer<typeof createApiKeySchema>
    >('POST', '/client/account/api-keys', createApiKeySchema.parse(options));
    return {
      ...res,
      api_key: `${res.attributes.identifier}${res.meta.secret_token}`,
    };
  }

  delete(options: DeleteApiKeyArgs) {
    const { identifier } = deleteApiKeySchema.parse(options);
    return this.httpClient.request<void>(
      'DELETE',
      `/client/account/api-keys/${identifier}`,
    );
  }
}
