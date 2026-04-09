import type HttpClient from '../../../class/HttpClient.js';
import type { EditSubuserArgs, Subuser } from '../subuser.types.js';
import { editSubuserSchema, userServerSubuserId } from '../server.schemas.js';

export default class SubuserClient {
  readonly subuser: string;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    subuser: string,
  ) {
    this.subuser = userServerSubuserId.parse(subuser);
  }

  async info() {
    const res = await this.httpClient.request<Subuser<string>>(
      'GET',
      `/client/servers/${this.server}/users/${this.subuser}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  async edit(options: EditSubuserArgs) {
    const res = await this.httpClient.request<Subuser<string>, EditSubuserArgs>(
      'POST',
      `/client/servers/${this.server}/users/${this.subuser}`,
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

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/users/${this.subuser}`,
    );
  }
}
