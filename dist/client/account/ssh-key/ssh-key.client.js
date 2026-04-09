import { createSshKeySchema, deleteSshKeySchema } from '../account.schemas.js';
export default class SshKeyClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list() {
        const res = await this.httpClient.request('GET', '/client/account/ssh-keys');
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
    async create(options) {
        const res = await this.httpClient.request('POST', '/client/account/ssh-keys', createSshKeySchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
            },
        };
    }
    delete(options) {
        return this.httpClient.request('POST', `/client/account/ssh-keys/remove`, deleteSshKeySchema.parse(options));
    }
}
