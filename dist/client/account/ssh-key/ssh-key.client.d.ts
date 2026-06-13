import type { CreateSshKeyPayload, DeleteSshKeyPayload, SshKey } from './ssh-key.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
export declare class SshKeyClient extends BaseClient {
    fetch(): Promise<SshKey[]>;
    create(payload: CreateSshKeyPayload): Promise<SshKey>;
    delete(payload: DeleteSshKeyPayload): Promise<void>;
}
//# sourceMappingURL=ssh-key.client.d.ts.map