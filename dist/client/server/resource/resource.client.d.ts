import type { HttpClient } from '../../../class/HttpClient.js';
import type { Stats } from './resource.types.js';
export declare class ResourceClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    usage(): Promise<Stats>;
}
//# sourceMappingURL=resource.client.d.ts.map