import type HttpClient from '../../class/HttpClient.js';
import EggsClient from './eggs/eggs.client.js';
import EggClient from './egg/egg.client.js';
export default class NestClient {
    private httpClient;
    eggs: EggsClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    egg(id: number): EggClient;
    info(): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            author: string;
            name: string;
            description: string;
        };
        object: "nest";
    }>;
}
//# sourceMappingURL=nest.client.d.ts.map