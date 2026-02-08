import type HttpClient from "../../../../class/HttpClient.js";
export default class PasswordClient {
    private httpClient;
    readonly server: number;
    readonly database: number;
    constructor(httpClient: HttpClient, server: number, database: number);
    reset(): Promise<void>;
}
//# sourceMappingURL=password.client.d.ts.map