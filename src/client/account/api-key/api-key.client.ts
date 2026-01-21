import type HttpClient from "../../../class/HttpClient.js";
import type {
  ApiKeysParsed,
  ApiKeysRaw,
  CreateApiKeyArgs,
  CreatedApiKey,
  DeleteApiKeyArgs,
  ReturnedApiKey,
} from "./api-key.types.js";

export default class ApiKeyClient {
  constructor(private httpClient: HttpClient) {}

  async list(): Promise<ApiKeysParsed> {
    const res = await this.httpClient.request<ApiKeysRaw>(
      "GET",
      "/client/account/api-keys",
    );
    return {
      ...res,
      data: res.data.map((apiKey) => ({
        ...apiKey,
        attributes: {
          ...apiKey.attributes,
          last_used_at: new Date(apiKey.attributes.last_used_at),
          created_at: new Date(apiKey.attributes.created_at),
        },
      })),
    };
  }

  async create({
    description,
    allowed_ips,
  }: CreateApiKeyArgs): Promise<ReturnedApiKey> {
    const res = await this.httpClient.request<CreatedApiKey, CreateApiKeyArgs>(
      "POST",
      "/client/account/api-keys",
      {
        description,
        allowed_ips,
      },
    );
    return {
      ...res,
      api_key: `${res.attributes.identifier}${res.meta.secret_token}`,
    };
  }

  delete({ identifier }: DeleteApiKeyArgs): Promise<void> {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/account/api-keys/${identifier}`,
    );
  }
}
