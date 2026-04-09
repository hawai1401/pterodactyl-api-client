import type HttpClient from '../../../class/HttpClient.js';
import type { DatabaseWithPassword } from '../database.types.js';
import { createDatabaseSchema } from '../server.schemas.js';
import type { CreateDatabaseArgs, DatabaseList } from '../database.types.js';

export default class DatabasesClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  list() {
    return this.httpClient.request<DatabaseList>(
      'GET',
      `/client/servers/${this.server}/databases`,
    );
  }

  async create(options: CreateDatabaseArgs) {
    const res = await this.httpClient.request<
      DatabaseWithPassword,
      CreateDatabaseArgs
    >(
      'POST',
      `/client/servers/${this.server}/databases`,
      createDatabaseSchema.parse(options),
    );
    return {
      ...res,
      password: res.attributes.relationships.password.attributes.password,
    };
  }
}
