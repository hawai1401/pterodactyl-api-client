import type { BasePayload } from '../../../types.js';
export interface SshKeyObject {
    object: 'ssh_key';
    attributes: {
        name: string;
        fingerprint: string;
        public_key: string;
        created_at: Date;
    };
}
export interface SshKey {
    name: string;
    fingerprint: string;
    publicKey: string;
    createdAt: Date;
}
export interface CreateSshKeyPayload extends BasePayload {
    name: string;
    public_key: string;
}
export interface DeleteSshKeyPayload extends BasePayload {
    fingerprint: string;
}
//# sourceMappingURL=ssh-key.types.d.ts.map