import type { HttpClient } from '../../../../class/HttpClient.js';
import type { DatabaseObject } from '../../databases/databases.types.js';

export class UserServerDatabaseClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly database: string,
  ) {}

  async rotate() {
    const databaseObject = await this.httpClient.request<DatabaseObject<true>>(
      'POST',
      `/client/servers/${this.server}/databases/${this.database}/rotate-password`,
    );
    return {
      ...databaseObject,
      password:
        databaseObject.attributes.relationships.password.attributes.password,
    };
  }
}
