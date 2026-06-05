import type { HttpClient } from '../../../../class/HttpClient.js';
export declare class UserServerDatabaseClient {
    private httpClient;
    readonly server: string;
    readonly database: string;
    constructor(httpClient: HttpClient, server: string, database: string);
    rotate(): Promise<{
        password: string;
        object: "server_database";
        attributes: {
            relationships: {
                password: {
                    object: "database_password";
                    attributes: {
                        password: string;
                    };
                };
            };
            id: string;
            host: {
                address: string;
                port: number;
            };
            name: string;
            username: string;
            connectionsFrom: string;
            maxConnections: number;
        };
    }>;
}
//# sourceMappingURL=password.client.d.ts.map