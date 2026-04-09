import type HttpClient from '../../../class/HttpClient.js';
import type { EditAcountArgs } from '../account.types.js';
import type { A2FData, EnableA2fArgs, RecoveryTokens } from './a2f.types.js';
export default class A2fClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    enable(options: EnableA2fArgs): Promise<RecoveryTokens>;
    disable(options: EditAcountArgs): Promise<void>;
    qrCode(): Promise<A2FData>;
}
//# sourceMappingURL=a2f.client.d.ts.map