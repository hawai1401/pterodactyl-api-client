import type HttpClient from "../../class/HttpClient.js";
import type { CreateLocationArgs, EditLocationArgs } from "./location.types.js";
export default class LocationClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
            attributes: {
                created_at: Date;
                updated_at: Date;
                id: number;
                short: string;
                long: string;
            };
            object: "location";
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    info(id: number): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            short: string;
            long: string;
        };
        object: "location";
    }>;
    create(options: CreateLocationArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            short: string;
            long: string;
        };
        object: "location";
    }>;
    edit(id: number, options: EditLocationArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            short: string;
            long: string;
        };
        object: "location";
    }>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=location.client.d.ts.map