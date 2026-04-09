import type { BaseArgs, List } from '../../../types.js';
export interface SshKey<T> {
    object: 'ssh_key';
    attributes: {
        name: string;
        fingerprint: string;
        public_key: string;
        created_at: T;
    };
}
export interface SshKeysRaw extends List {
    data: SshKey<string>[];
}
export interface SshKeysParsed extends List {
    data: SshKey<Date>[];
}
export interface CreateSshKeyArgs extends BaseArgs {
    name: string;
    public_key: string;
}
export interface DeleteSshKeyArgs extends BaseArgs {
    fingerprint: string;
}
//# sourceMappingURL=ssh-key.types.d.ts.map