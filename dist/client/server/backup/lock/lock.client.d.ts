import type HttpClient from '../../../../class/HttpClient.js';
export default class LockClient {
    private httpClient;
    readonly server: string;
    readonly backup: string;
    constructor(httpClient: HttpClient, server: string, backup: string);
    toggle(): Promise<void>;
}
//# sourceMappingURL=lock.client.d.ts.map