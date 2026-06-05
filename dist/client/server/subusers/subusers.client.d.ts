import type { HttpClient } from '../../../class/HttpClient.js';
import type { CreateSubuserPayload, Subuser } from './subusers.types.js';
export declare class SubusersClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<Subuser[]>;
    create(payload: CreateSubuserPayload): Promise<Subuser>;
}
//# sourceMappingURL=subusers.client.d.ts.map