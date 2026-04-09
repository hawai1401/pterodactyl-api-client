import type HttpClient from '../../../../class/HttpClient.js';
export default class PasswordClient {
    private httpClient;
    readonly server: string;
    readonly database: string;
    constructor(httpClient: HttpClient, server: string, database: string);
    rotate(): Promise<{
        password: string;
        object: "server_database";
        attributes: import("../../database.types.js").DatabaseAttributesWithPassword;
    }>;
}
//# sourceMappingURL=password.client.d.ts.map