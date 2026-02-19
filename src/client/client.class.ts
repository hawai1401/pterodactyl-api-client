import HttpClient from "../class/HttpClient.js";
import type { BaseListArgs } from "../types.js";
import buildQueryParams from "../utils/buildQueryParams.js";
import { Account } from "./account/index.js";
import { userServerFilterSchema } from "./client.schema.js";
import {
  Server,
  type UserServerAttributes,
  type UserServerList,
} from "./server/index.js";

export default class ClientAPI {
  private httpClient: HttpClient;
  readonly panelUrl: URL;
  public account: Account;

  constructor({ apiKey, panelUrl }: { apiKey: string; panelUrl: URL }) {
    this.panelUrl = panelUrl;
    this.httpClient = new HttpClient(panelUrl, apiKey);
    this.account = new Account(this.httpClient);
  }

  servers(
    options:
      | BaseListArgs & {
          filter?: {
            uuid?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            external_id?: string | undefined;
          };
        }
      | undefined = {},
  ) {
    const filter = userServerFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams<{
      uuid?: string | undefined;
      name?: string | undefined;
      description?: string | undefined;
      external_id?: string | undefined;
    }>({
      ...options,
      filter,
    });
    return this.httpClient.request<UserServerList<UserServerAttributes>>(
      "GET",
      `/client?${queries}`,
    );
  }

  server(id: string) {
    return new Server(this.httpClient, this.panelUrl, id);
  }
}
