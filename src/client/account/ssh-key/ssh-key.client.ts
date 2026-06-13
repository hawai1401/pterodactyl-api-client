import type { infer as zInfer } from 'zod';
import { createSshKeySchema, deleteSshKeySchema } from '../account.schemas.js';
import type {
  CreateSshKeyPayload,
  DeleteSshKeyPayload,
  SshKey,
  SshKeyObject,
} from './ssh-key.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
import type { ObjectList } from '../../../types.js';

export class SshKeyClient extends BaseClient {
  async fetch(): Promise<SshKey[]> {
    const sshKeyObjectList = await this.httpClient.request<
      ObjectList<SshKeyObject>
    >('GET', '/client/account/ssh-keys', { parseDates: true });
    return sshKeyObjectList.data.map((sshKeyObject) => sshKeyObject.attributes);
  }

  async create(payload: CreateSshKeyPayload): Promise<SshKey> {
    const sshKey = await this.httpClient.request<
      SshKeyObject,
      zInfer<typeof createSshKeySchema>
    >('POST', '/client/account/ssh-keys', createSshKeySchema.parse(payload), {
      parseDates: true,
    });
    return sshKey.attributes;
  }

  delete(payload: DeleteSshKeyPayload) {
    return this.httpClient.request<void, zInfer<typeof deleteSshKeySchema>>(
      'POST',
      `/client/account/ssh-keys/remove`,
      deleteSshKeySchema.parse(payload),
    );
  }
}
