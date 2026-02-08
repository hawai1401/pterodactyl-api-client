import type HttpClient from "../../class/HttpClient.js";
import type { EditLocationArgs } from "./location.types.js";
export default class LocationClient {
    private httpClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    info(): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            short: string;
            long: string;
        };
        object: "location";
    }>;
    edit(options: EditLocationArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            short: string;
            long: string;
        };
        object: "location";
    }>;
    delete(): Promise<void>;
}
//# sourceMappingURL=location.client.d.ts.map