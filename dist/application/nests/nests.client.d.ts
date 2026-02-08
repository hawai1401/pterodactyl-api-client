import type HttpClient from "../../class/HttpClient.js";
export default class NestsClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list(): Promise<{
        data: {
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
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
}
//# sourceMappingURL=nests.client.d.ts.map