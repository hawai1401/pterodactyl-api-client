import type HttpClient from '../../../class/HttpClient.js';
import type { CreateApiKeyArgs, DeleteApiKeyArgs } from './api-key.types.js';
export default class ApiKeyClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            attributes: {
                last_used_at: Date;
                created_at: Date;
                identifier: string;
                description: string;
                allowed_ips: string[];
            };
            object: "api_key";
        }[];
        object: "list";
    }>;
    create(options: CreateApiKeyArgs): Promise<{
        api_key: string;
        meta: {
            secret_token: string;
        };
        object: "api_key";
        attributes: {
            identifier: string;
            description: string;
            allowed_ips: string[];
            last_used_at: null;
            created_at: string;
        };
    }>;
    delete(options: DeleteApiKeyArgs): Promise<void>;
}
//# sourceMappingURL=api-key.client.d.ts.map