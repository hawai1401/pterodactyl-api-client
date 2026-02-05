import { userServerDatabaseId, userServerId } from "../../server.schemas.js";
export default class PasswordClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async rotate(id, database) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/databases/${userServerDatabaseId.parse(database)}/rotate-password`);
        return {
            ...res,
            password: res.attributes.relationships.password.attributes.password,
        };
    }
}
