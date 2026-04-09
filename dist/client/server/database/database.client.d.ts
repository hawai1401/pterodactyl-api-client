import type HttpClient from '../../../class/HttpClient.js';
import PasswordClient from './password/password.client.js';
export default class DatabaseClient {
    private httpClient;
    readonly server: string;
    password: PasswordClient;
    readonly database: string;
    constructor(httpClient: HttpClient, server: string, database: string);
    delete(): Promise<void>;
}
//# sourceMappingURL=database.client.d.ts.map