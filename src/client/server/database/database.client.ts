import type { HttpClient } from '../../../class/HttpClient.js';
import { userServerDatabaseId } from '../server.schemas.js';
import { UserServerDatabaseClient } from './password/password.client.js';

export class DatabaseClient {
  public password: UserServerDatabaseClient;
  readonly database: string;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    database: string,
  ) {
    this.password = new UserServerDatabaseClient(httpClient, server, database);
    this.database = userServerDatabaseId.parse(database);
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/databases/${this.database}`,
    );
  }
}
