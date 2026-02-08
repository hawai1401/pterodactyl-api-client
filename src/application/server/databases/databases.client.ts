import z from "zod";
import type HttpClient from "../../../class/HttpClient.js";
import {
  applicationServerId,
  createApplicationDatabaseSchema,
} from "../server.schemas.js";
import type {
  ApplicationDatabaseList,
  CreateApplicationDatabase,
  CreatedApplicationDatabase,
} from "./databases.types.js";

export default class DatabasesClient {
  constructor(private httpClient: HttpClient) {}

  async list(server: number) {
    const res = await this.httpClient.request<ApplicationDatabaseList>(
      "GET",
      `/application/servers/${applicationServerId.parse(server)}/databases`,
    );
    return {
      ...res,
      data: res.data.map((db) => ({
        ...db,
        attributes: {
          ...db.attributes,
          created_at: new Date(db.attributes.created_at),
          updated_at: new Date(db.attributes.updated_at),
        },
      })),
    };
  }

  async create(server: number, args: CreateApplicationDatabase) {
    const res = await this.httpClient.request<
      CreatedApplicationDatabase,
      z.infer<typeof createApplicationDatabaseSchema>
    >(
      "POST",
      `/application/servers/${applicationServerId.parse(server)}/databases`,
      createApplicationDatabaseSchema.parse(args),
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
}
