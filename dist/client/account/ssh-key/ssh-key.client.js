import { createSshKeySchema, deleteSshKeySchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class SshKeyClient extends BaseClient {
    async fetch() {
        const sshKeyObjectList = await this.httpClient.request('GET', '/client/account/ssh-keys', { parseDates: true });
        return sshKeyObjectList.data.map((sshKeyObject) => sshKeyObject.attributes);
    }
    async create(payload) {
        const sshKey = await this.httpClient.request('POST', '/client/account/ssh-keys', createSshKeySchema.parse(payload), {
            parseDates: true,
        });
        return sshKey.attributes;
    }
    delete(payload) {
        return this.httpClient.request('POST', `/client/account/ssh-keys/remove`, deleteSshKeySchema.parse(payload));
    }
}
