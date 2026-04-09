import type HttpClient from '../../../class/HttpClient.js';
export default class PowerClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    start(): Promise<void>;
    stop(): Promise<void>;
    restart(): Promise<void>;
    kill(): Promise<void>;
}
//# sourceMappingURL=power.client.d.ts.map