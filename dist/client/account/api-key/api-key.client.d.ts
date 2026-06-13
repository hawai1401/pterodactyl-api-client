import type { ApiKey, CreateApiKeyPayload, CreatedApiKey, DeleteApiKeyPayload } from './api-key.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
export declare class ApiKeyClient extends BaseClient {
    fetch(): Promise<ApiKey[]>;
    create(payload: CreateApiKeyPayload): Promise<CreatedApiKey>;
    delete(payload: DeleteApiKeyPayload): Promise<void>;
}
//# sourceMappingURL=api-key.client.d.ts.map