import type { HttpClient } from '../../../class/HttpClient.js';
import type { Egg } from './eggs.types.js';
export declare class EggsClient {
    private httpClient;
    readonly nest: number;
    constructor(httpClient: HttpClient, nest: number);
    fetch(): Promise<Egg[]>;
}
//# sourceMappingURL=eggs.client.d.ts.map