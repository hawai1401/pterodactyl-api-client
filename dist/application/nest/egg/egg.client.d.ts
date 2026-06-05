import type { HttpClient } from '../../../class/HttpClient.js';
import type { Egg } from '../eggs/eggs.types.js';
export declare class EggClient {
    private httpClient;
    readonly nest: number;
    readonly id: number;
    constructor(httpClient: HttpClient, nest: number, id: number);
    fetch(): Promise<Egg>;
}
//# sourceMappingURL=egg.client.d.ts.map