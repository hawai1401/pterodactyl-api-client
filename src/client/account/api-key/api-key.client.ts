import type { infer as zInfer } from 'zod';
import { createApiKeySchema, deleteApiKeySchema } from '../account.schemas.js';
import type {
  ApiKey,
  ApiKeyObject,
  CreateApiKeyPayload,
  CreatedApiKey,
  CreatedApiKeyObject,
  DeleteApiKeyPayload,
} from './api-key.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
import type { ObjectList } from '../../../types.js';

export class ApiKeyClient extends BaseClient {
  async fetch(): Promise<ApiKey[]> {
    const apiKeyObjectList = await this.httpClient.request<
      ObjectList<ApiKeyObject>
    >('GET', '/client/account/api-keys', { parseDates: true });
    return apiKeyObjectList.data.map((apiKeyObject) => apiKeyObject.attributes);
  }

  async create(payload: CreateApiKeyPayload): Promise<CreatedApiKey> {
    const createdApiKeyObject = await this.httpClient.request<
      CreatedApiKeyObject,
      zInfer<typeof createApiKeySchema>
    >('POST', '/client/account/api-keys', createApiKeySchema.parse(payload), {
      parseDates: true,
    });
    return {
      ...createdApiKeyObject.attributes,
      key: `${createdApiKeyObject.attributes.identifier}${createdApiKeyObject.meta.secretToken}`,
    };
  }

  delete(payload: DeleteApiKeyPayload) {
    return this.httpClient.request(
      'DELETE',
      `/client/account/api-keys/${deleteApiKeySchema.parse(payload).identifier}`,
    );
  }
}
