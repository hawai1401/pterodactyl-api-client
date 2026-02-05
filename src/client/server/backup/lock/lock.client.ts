import type HttpClient from "../../../../class/HttpClient.js";
import { userServerBackupId, userServerId } from "../../server.schemas.js";

export default class LockClient {
  constructor(private httpClient: HttpClient) {}

  toggle(id: string, backup: string) {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/backups/${userServerBackupId.parse(backup)}/lock`,
    );
  }
}
