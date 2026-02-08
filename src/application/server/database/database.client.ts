import type HttpClient from "../../../class/HttpClient.js";
import { applicationServerDatabaseId } from "../server.schemas.js";
import type { ApplicationDatabase } from "../databases/databases.types.js";
import PasswordClient from "./password/password.client.js";

export default class DatabaseClient {
  public password: PasswordClient;
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: number,
    database: number,
  ) {
    this.id = applicationServerDatabaseId.parse(database);
    this.password = new PasswordClient(httpClient, server, this.id);
  }

  async info() {
    const res = await this.httpClient.request<ApplicationDatabase<string>>(
      "GET",
      `/application/servers/${this.server}/databases/${this.id}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete() {
    return this.httpClient.request<void>(
      "DELETE",
      `/application/servers/${this.server}/databases/${this.id}`,
    );
  }
}
