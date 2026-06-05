import type { HttpClient } from '../../class/HttpClient.js';
import { EggsClient } from './eggs/eggs.client.js';
import { EggClient } from './egg/egg.client.js';
import type { Nest } from '../nests/nests.types.js';
export declare class NestClient {
    private httpClient;
    eggs: EggsClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    egg(id: number): EggClient;
    fetch(): Promise<Nest>;
}
//# sourceMappingURL=nest.client.d.ts.map