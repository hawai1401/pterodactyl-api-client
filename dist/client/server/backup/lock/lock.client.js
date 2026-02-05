import { userServerBackupId, userServerId } from "../../server.schemas.js";
export default class LockClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    toggle(id, backup) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/lock`);
    }
}
