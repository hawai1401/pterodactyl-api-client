import PasswordClient from "./password/password.client.js";
import { createDatabaseSchema, userServerDatabaseId, userServerId, } from "../server.schemas.js";
export default class DatabaseClient {
    httpClient;
    password;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.password = new PasswordClient(httpClient);
    }
    list(id) {
        return this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/databases`);
    }
    async create(id, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/databases`, createDatabaseSchema.parse(options));
        return {
            ...res,
            password: res.attributes.relationships.password.attributes.password,
        };
    }
    delete(id, database) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/databases/${userServerDatabaseId.parse(database)}`);
    }
}
