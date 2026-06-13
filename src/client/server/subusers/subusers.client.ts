import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  CreateSubuserPayload,
  Subuser,
  SubuserObject,
} from './subusers.types.js';
import { createSubuserSchema } from '../server.schemas.js';
import type { ObjectList } from '../../../types.js';

export class SubusersClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<Subuser[]> {
    const subuserObjectList = await this.httpClient.request<
      ObjectList<SubuserObject>
    >('GET', `/client/servers/${this.server}/users`, { parseDates: true });
    return subuserObjectList.data.map(
      (subuserObject) => subuserObject.attributes,
    );
  }

  async create(payload: CreateSubuserPayload): Promise<Subuser> {
    const subuserObject = await this.httpClient.request<
      SubuserObject,
      CreateSubuserPayload
    >(
      'POST',
      `/client/servers/${this.server}/users`,
      createSubuserSchema.parse(payload),
      { parseDates: true },
    );
    return subuserObject.attributes;
  }
}
