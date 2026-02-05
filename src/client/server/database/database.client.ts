import type HttpClient from "../../../class/HttpClient.js";
import type {
  CreateDatabaseArgs,
  DatabaseList,
  DatabaseWithPassword,
} from "./database.types.js";
import PasswordClient from "./password/password.client.js";
import {
  createDatabaseSchema,
  userServerDatabaseId,
  userServerId,
} from "../server.schemas.js";

export default class DatabaseClient {
  public password: PasswordClient;

  constructor(private httpClient: HttpClient) {
    this.password = new PasswordClient(httpClient);
  }

  list(id: string) {
    return this.httpClient.request<DatabaseList>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/databases`,
    );
  }

  async create(id: string, options: CreateDatabaseArgs) {
    const res = await this.httpClient.request<
      DatabaseWithPassword,
      CreateDatabaseArgs
    >(
      "POST",
      `/client/servers/${userServerId.parse(id)}/databases`,
      createDatabaseSchema.parse(options),
    );
    return {
      ...res,
      password: res.attributes.relationships.password.attributes.password,
    };
  }

  delete(id: string, database: string) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/databases/${userServerDatabaseId.parse(database)}`,
    );
  }
}
