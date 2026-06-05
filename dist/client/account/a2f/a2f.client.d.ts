import type { BaseEditAccountPayload } from '../account.types.js';
import type { A2fCredentials, EnableA2fPayload, RecoveryTokens } from './a2f.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
export declare class A2fClient extends BaseClient {
    enable(payload: EnableA2fPayload): Promise<RecoveryTokens>;
    disable(payload: BaseEditAccountPayload): Promise<void>;
    getCredentials(): Promise<A2fCredentials>;
}
//# sourceMappingURL=a2f.client.d.ts.map