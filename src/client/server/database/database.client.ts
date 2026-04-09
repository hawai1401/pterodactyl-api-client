import type HttpClient from '../../../class/HttpClient.js';
import { userServerDatabaseId } from '../server.schemas.js';
import PasswordClient from './password/password.client.js';

export default class DatabaseClient {
  public password: PasswordClient;
  readonly database: string;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    database: string,
  ) {
    this.password = new PasswordClient(httpClient, server, database);
    this.database = userServerDatabaseId.parse(database);
  }

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/databases/${this.database}`,
    );
  }
}
