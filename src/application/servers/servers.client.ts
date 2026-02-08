import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type {
  UserServer,
  UserServerAttributesWithDate,
} from "../../client/server/server.types.js";
import { createServerSchema } from "./servers.schemas.js";
import type {
  ApplicationServerList,
  CreateServerArgs,
} from "./servers.types.js";

export default class ServersClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<ApplicationServerList>(
      "GET",
      "/application/servers",
    );
    return {
      ...res,
      data: res.data.map((server) => ({
        ...server,
        created_at: new Date(server.created_at),
        updated_at: new Date(server.updated_at),
      })),
    };
  }

  async create(options: CreateServerArgs) {
    const res = await this.httpClient.request<
      UserServer<UserServerAttributesWithDate<string>>,
      z.infer<typeof createServerSchema>
    >("POST", `/application/servers`, createServerSchema.parse(options));
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }
}
