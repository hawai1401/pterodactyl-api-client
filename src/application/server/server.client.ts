import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type {
  UserServer,
  UserServerAttributesWithDate,
} from "../../client/server/server.types.js";
import DatabaseClient from "./database/database.client.js";
import {
  applicationServerIdSchema,
  editApplicationServerConfigurationSchema,
  editApplicationServerDetailsSchema,
  editApplicationServerStartupSchema,
} from "./server.schemas.js";
import type {
  ApplicationServerId,
  EditApplicationServerArgs,
} from "./server.types.js";
import DatabasesClient from "./databases/databases.client.js";

export default class ServerClient {
  public databases: DatabasesClient;

  readonly id: number | undefined;
  readonly external_id: string | undefined;

  constructor(
    private httpClient: HttpClient,
    args: ApplicationServerId,
  ) {
    this.databases = new DatabasesClient(httpClient);
    const { id, external_id } = applicationServerIdSchema.parse(args);

    this.id = id;
    this.external_id = external_id;
  }

  database(database: number) {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return new DatabaseClient(this.httpClient, this.id, database);
  }

  async info() {
    const res = await this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >(
      "GET",
      `/application/servers/${this.id ?? `external/${this.external_id}`}`,
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

  async edit({ details, configuration, startup }: EditApplicationServerArgs) {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    const basePath = `/application/servers/${this.id}`;
    const requests: Promise<
      UserServer<UserServerAttributesWithDate<string>>
    >[] = [];
    if (details)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerDetailsSchema>
        >(
          "PATCH",
          `${basePath}/details`,
          editApplicationServerDetailsSchema.parse(details),
        ),
      );
    if (configuration)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerConfigurationSchema>
        >(
          "PATCH",
          `${basePath}/build`,
          editApplicationServerConfigurationSchema.parse(configuration),
        ),
      );
    if (startup)
      requests.push(
        this.httpClient.request<
          UserServer<UserServerAttributesWithDate<string>>,
          z.infer<typeof editApplicationServerStartupSchema>
        >(
          "PATCH",
          `${basePath}/startup`,
          editApplicationServerStartupSchema.parse(startup),
        ),
      );

    if (requests.length === 0)
      throw new Error("Aucunes modifications spécifiées !");

    const res = await Promise.all(requests);

    return {
      ...res[0]!,
      attributes: {
        ...res[0]!.attributes,
        created_at: new Date(res[0]!.attributes.created_at),
        updated_at: new Date(res[0]!.attributes.updated_at),
      },
    };
  }

  suspend() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${this.id}/suspend`);
  }

  unsuspend() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${this.id}/unsuspend`);
  }

  reinstall() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("POST", `/application/servers/${this.id}/reinstall`);
  }

  delete(force?: boolean | undefined) {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>
    >("DELETE", `/application/servers/${this.id}${force ? "?force=true" : ""}`);
  }
}
