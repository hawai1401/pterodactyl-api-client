import type HttpClient from "../../../class/HttpClient.js";
import type {
  CreateSshKeyArgs,
  DeleteSshKeyArgs,
  SshKey,
  SshKeysParsed,
  SshKeysRaw,
} from "./ssh-key.types.js";

export default class SshKeyClient {
  constructor(private httpClient: HttpClient) {}

  async list(): Promise<SshKeysParsed> {
    const res = await this.httpClient.request<SshKeysRaw>(
      "GET",
      "/client/account/ssh-keys",
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

  async create({ name, public_key }: CreateSshKeyArgs): Promise<SshKey<Date>> {
    const res = await this.httpClient.request<SshKey<string>, CreateSshKeyArgs>(
      "POST",
      "/client/account/ssh-keys",
      {
        name,
        public_key,
      },
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
      },
    };
  }

  delete({ fingerprint }: DeleteSshKeyArgs): Promise<void> {
    return this.httpClient.request<void, DeleteSshKeyArgs>(
      "DELETE",
      `/client/account/api-keys/remove`,
      { fingerprint },
    );
  }
}
