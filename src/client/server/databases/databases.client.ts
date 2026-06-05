import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  CreateDatabasePayload,
  Database,
  DatabaseObject,
} from './databases.types.js';
import { createDatabaseSchema } from '../server.schemas.js';
import type { ObjectList } from '../../../types.js';

export class DatabasesClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<Database[]> {
    const databaseObjectList = await this.httpClient.request<
      ObjectList<DatabaseObject>
    >('GET', `/client/servers/${this.server}/databases`);
    return databaseObjectList.data.map(
      (databaseObject) => databaseObject.attributes,
    );
  }

  async create(payload: CreateDatabasePayload): Promise<Database<true>> {
    const databaseObject = await this.httpClient.request<
      DatabaseObject<true>,
      CreateDatabasePayload
    >(
      'POST',
      `/client/servers/${this.server}/databases`,
      createDatabaseSchema.parse(payload),
    );
    return {
      ...databaseObject.attributes,
      password:
        databaseObject.attributes.relationships.password.attributes.password,
    };
  }
}
