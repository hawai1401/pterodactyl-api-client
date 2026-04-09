import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import { createSshKeySchema, deleteSshKeySchema } from '../account.schemas.js';
import type {
  CreateSshKeyArgs,
  DeleteSshKeyArgs,
  SshKey,
  SshKeysRaw,
} from './ssh-key.types.js';

export default class SshKeyClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<SshKeysRaw>(
      'GET',
      '/client/account/ssh-keys',
    );
    return {
      ...res,
      data: res.data.map((sshKey) => ({
        ...sshKey,
        attributes: {
          ...sshKey.attributes,
          created_at: new Date(sshKey.attributes.created_at),
        },
      })),
    };
  }

  async create(options: CreateSshKeyArgs) {
    const res = await this.httpClient.request<
      SshKey<string>,
      z.infer<typeof createSshKeySchema>
    >('POST', '/client/account/ssh-keys', createSshKeySchema.parse(options));
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  delete(options: DeleteSshKeyArgs) {
    return this.httpClient.request<void, z.infer<typeof deleteSshKeySchema>>(
      'POST',
      `/client/account/ssh-keys/remove`,
      deleteSshKeySchema.parse(options),
    );
  }
}
