import type { HttpClient } from '../../../class/HttpClient.js';
import type { SetSubuserPermissionsPayload } from './subuser.types.js';
import type { Subuser, SubuserObject } from '../subusers/subusers.types.js';
import {
  setSubuserPermissionsSchema,
  userServerSubuserId,
} from '../server.schemas.js';

export class SubuserClient {
  readonly subuser: string;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    subuser: string,
  ) {
    this.subuser = userServerSubuserId.parse(subuser);
  }

  async fetch(): Promise<Subuser> {
    const subuserObject = await this.httpClient.request<SubuserObject>(
      'GET',
      `/client/servers/${this.server}/users/${this.subuser}`,
      { parseDates: true },
    );
    return subuserObject.attributes;
  }

  async setPermissions(
    payload: SetSubuserPermissionsPayload,
  ): Promise<Subuser> {
    const res = await this.httpClient.request<
      SubuserObject,
      SetSubuserPermissionsPayload
    >(
      'POST',
      `/client/servers/${this.server}/users/${this.subuser}`,
      setSubuserPermissionsSchema.parse(payload),
      { parseDates: true },
    );
    return res.attributes;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/users/${this.subuser}`,
    );
  }
}
