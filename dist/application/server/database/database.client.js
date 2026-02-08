import { applicationServerDatabaseId } from "../server.schemas.js";
import PasswordClient from "./password/password.client.js";
export default class DatabaseClient {
    httpClient;
    server;
    password;
    id;
    constructor(httpClient, server, database) {
        this.httpClient = httpClient;
        this.server = server;
        this.id = applicationServerDatabaseId.parse(database);
        this.password = new PasswordClient(httpClient, server, this.id);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/servers/${this.server}/databases/${this.id}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete() {
        return this.httpClient.request("DELETE", `/application/servers/${this.server}/databases/${this.id}`);
    }
}
