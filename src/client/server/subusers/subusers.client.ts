import type HttpClient from '../../../class/HttpClient.js';
import type {
  CreateSubuserArgs,
  Subuser,
  SubuserList,
} from '../subuser.types.js';
import { createSubuserSchema } from '../server.schemas.js';

export default class SubusersClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async list() {
    const res = await this.httpClient.request<SubuserList>(
      'GET',
      `/client/servers/${this.server}/users`,
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

  async create(options: CreateSubuserArgs) {
    const res = await this.httpClient.request<
      Subuser<string>,
      CreateSubuserArgs
    >(
      'POST',
      `/client/servers/${this.server}/users`,
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
}
