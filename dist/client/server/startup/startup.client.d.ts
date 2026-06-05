import type { HttpClient } from '../../../class/HttpClient.js';
import type { SetEnvironmentVariablePayload, EggVariable, StartupConfig } from './startup.types.js';
export declare class StartupClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<StartupConfig>;
    setEnvironmentVariable(payload: SetEnvironmentVariablePayload): Promise<EggVariable>;
}
//# sourceMappingURL=startup.client.d.ts.map