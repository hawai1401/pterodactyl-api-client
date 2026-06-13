import type { HttpClient } from '../../../class/HttpClient.js';
import type { SetSubuserPermissionsPayload } from './subuser.types.js';
import type { Subuser } from '../subusers/subusers.types.js';
export declare class SubuserClient {
    private httpClient;
    readonly server: string;
    readonly subuser: string;
    constructor(httpClient: HttpClient, server: string, subuser: string);
    fetch(): Promise<Subuser>;
    setPermissions(payload: SetSubuserPermissionsPayload): Promise<Subuser>;
    delete(): Promise<void>;
}
//# sourceMappingURL=subuser.client.d.ts.map