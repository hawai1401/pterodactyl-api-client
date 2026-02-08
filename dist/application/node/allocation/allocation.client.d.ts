import type HttpClient from "../../../class/HttpClient.js";
export default class AllocationClient {
    private httpClient;
    readonly node: number;
    readonly id: number;
    constructor(httpClient: HttpClient, node: number, id: number);
    delete(): Promise<void>;
}
//# sourceMappingURL=allocation.client.d.ts.map