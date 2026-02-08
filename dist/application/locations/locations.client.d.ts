import type HttpClient from "../../class/HttpClient.js";
import type { CreateLocationArgs } from "./locations.types.js";
export default class LocationsClient {
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
}
//# sourceMappingURL=locations.client.d.ts.map