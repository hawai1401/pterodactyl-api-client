import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../../class/HttpClient.js';
import {
  applicationServerId,
  createApplicationDatabaseSchema,
} from '../server.schemas.js';
import type {
  ApplicationDatabase,
  ApplicationDatabaseObject,
  CreateApplicationDatabase as CreateApplicationDatabasePayload,
} from './databases.types.js';
import type { ObjectList } from '../../../types.js';

export class DatabasesClient {
  readonly server: number;

  constructor(
    private httpClient: HttpClient,
    server: number,
  ) {
    this.server = applicationServerId.parse(server);
  }

  async fetch(): Promise<ApplicationDatabase[]> {
    const databaseObjectList = await this.httpClient.request<
      ObjectList<ApplicationDatabaseObject>
    >('GET', `/application/servers/${this.server}/databases`, {
      parseDates: true,
    });
    return databaseObjectList.data.map(
      (databaseObject) => databaseObject.attributes,
    );
  }

  async create(
    payload: CreateApplicationDatabasePayload,
  ): Promise<ApplicationDatabase> {
    const databaseObject = await this.httpClient.request<
      ApplicationDatabaseObject,
      zInfer<typeof createApplicationDatabaseSchema>
    >(
      'POST',
      `/application/servers/${this.server}/databases`,
      createApplicationDatabaseSchema.parse(payload),
      { parseDates: true },
    );
    return databaseObject.attributes;
  }
}
