import type HttpClient from "../../class/HttpClient.js";
export default class NestClient {
    private httpClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
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