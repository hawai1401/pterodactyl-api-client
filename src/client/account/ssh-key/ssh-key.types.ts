import type { BaseArgs } from "../../../types.js";

export interface SshKey<T> {
  object: "ssh_key";
  attributes: {
    name: string;
    fingerprint: string;
    public_key: string;
    created_at: T;
  };
}

export type SshKeysRaw = {
  object: "list";
  data: SshKey<string>[];
};

export type SshKeysParsed = {
  object: "list";
  data: SshKey<Date>[];
};

export interface CreateSshKeyArgs extends BaseArgs {
  name: string;
  public_key: string;
}

export interface DeleteSshKeyArgs extends BaseArgs {
  fingerprint: string;
}
