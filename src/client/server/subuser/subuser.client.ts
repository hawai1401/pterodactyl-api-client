import type HttpClient from "../../../class/HttpClient.js";
import type {
  CreateSubuserArgs,
  EditSubuserArgs,
  Subuser,
  SubuserList,
} from "./subuser.types.js";
import {
  createSubuserSchema,
  editSubuserSchema,
  userServerId,
  userServerSubuserId,
} from "../server.schemas.js";

export default class SubuserClient {
  constructor(private httpClient: HttpClient) {}

  async list(id: string) {
    const res = await this.httpClient.request<SubuserList>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/users`,
    );
    return {
      ...res,
      data: res.data.map((subuser) => ({
        ...subuser,
        attributes: {
          ...subuser.attributes,
          created_at: new Date(subuser.attributes.created_at),
        },
      })),
    };
  }

  async info(id: string, subuser: string) {
    const res = await this.httpClient.request<Subuser<string>>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  async create(id: string, options: CreateSubuserArgs) {
    const res = await this.httpClient.request<
      Subuser<string>,
      CreateSubuserArgs
    >(
      "POST",
      `/client/servers/${userServerId.parse(id)}/users`,
      createSubuserSchema.parse(options),
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  async edit(id: string, subuser: string, options: EditSubuserArgs) {
    const res = await this.httpClient.request<Subuser<string>, EditSubuserArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`,
      editSubuserSchema.parse(options),
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  delete(id: string, subuser: string) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/users/${userServerSubuserId.parse(subuser)}`,
    );
  }
}
