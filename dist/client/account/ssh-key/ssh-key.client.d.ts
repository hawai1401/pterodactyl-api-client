import type HttpClient from '../../../class/HttpClient.js';
import type { CreateSshKeyArgs, DeleteSshKeyArgs } from './ssh-key.types.js';
export default class SshKeyClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            attributes: {
                created_at: Date;
                name: string;
                fingerprint: string;
                public_key: string;
            };
            object: "ssh_key";
        }[];
        object: "list";
    }>;
    create(options: CreateSshKeyArgs): Promise<{
        attributes: {
            created_at: Date;
            name: string;
            fingerprint: string;
            public_key: string;
        };
        object: "ssh_key";
    }>;
    delete(options: DeleteSshKeyArgs): Promise<void>;
}
//# sourceMappingURL=ssh-key.client.d.ts.map