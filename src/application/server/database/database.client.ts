import type { HttpClient } from '../../../class/HttpClient.js';
import { applicationServerDatabaseId } from '../server.schemas.js';
import type {
  ApplicationDatabase,
  ApplicationDatabaseObject,
} from '../databases/databases.types.js';
import { ApplicationServerDatabaseClient } from './password/password.client.js';

export class DatabaseClient {
  public password: ApplicationServerDatabaseClient;
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: number,
    database: number,
  ) {
    this.id = applicationServerDatabaseId.parse(database);
    this.password = new ApplicationServerDatabaseClient(
      httpClient,
      server,
      this.id,
    );
  }

  async fetch(): Promise<ApplicationDatabase> {
    const databaseObject =
      await this.httpClient.request<ApplicationDatabaseObject>(
        'GET',
        `/application/servers/${this.server}/databases/${this.id}`,
        { parseDates: true },
      );
    return databaseObject.attributes;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/application/servers/${this.server}/databases/${this.id}`,
    );
  }
}
