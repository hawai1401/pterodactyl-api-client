import z from "zod";
import type HttpClient from "../../../class/HttpClient.js";
import type {
  CreateDatabaseArgs,
  DatabaseList,
  DatabaseAttributesWithPassword,
  DatabaseWithPassword,
} from "./database.types.js";
import PasswordClient from "./password/password.client.js";

export default class DatabaseClient {
  public password: PasswordClient;

  constructor(private httpClient: HttpClient) {
    this.password = new PasswordClient(httpClient);
  }

  list(id: string) {
    return this.httpClient.request<DatabaseList>(
      "GET",
      `/client/servers/${id}/databases`,
    );
  }

  async create(id: string, args: CreateDatabaseArgs) {
    const schema = z.object({
      database: z.string().min(1).max(48),
      remote: z.string(),
    });
    const { database, remote } = schema.parse(args);
    const res = await this.httpClient.request<
      DatabaseWithPassword,
      CreateDatabaseArgs
    >("POST", `/client/servers/${id}/databases`, { database, remote });
    return {
      ...res,
      password: res.attributes.relationships.password.attributes.password,
    };
  }

  delete(id: string, database: string) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${id}/databases/${database}`,
    );
  }
}
