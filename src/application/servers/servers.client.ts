import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type {
  UserServer,
  UserServerInfoAttributes,
} from "../../client/server/server.types.js";
import {
  createServerSchema,
  listServersFilterSchema,
} from "./servers.schemas.js";
import type {
  ApplicationServerList,
  CreateServerArgs,
} from "./servers.types.js";
import type { BaseListArgs, Sort } from "../../types.js";
import buildQueryParams from "../../utils/buildQueryParams.js";

export default class ServersClient {
  constructor(private httpClient: HttpClient) {}

  async list(
    options: {
      filter?:
        | {
            uuid?: string | undefined;
            uuidShort?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_id?: string | undefined;
          }
        | undefined;
      sort?:
        | {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
          }
        | undefined;
    } & BaseListArgs = {},
  ) {
    const filter = listServersFilterSchema.optional().parse(options.filter);
    const queries = buildQueryParams<
      {
        uuid?: string | undefined;
        uuidShort?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        external_id?: string | undefined;
      },
      { id?: Sort | undefined; uuid?: Sort | undefined }
    >({ ...options, filter });
    const res = await this.httpClient.request<ApplicationServerList>(
      "GET",
      `/application/servers?${queries}`,
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
      UserServer<UserServerInfoAttributes>,
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
