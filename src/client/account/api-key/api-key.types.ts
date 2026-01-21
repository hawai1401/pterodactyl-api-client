import type { BaseArgs, IP } from "../../../types.js";

export interface ApiKey<L, C = L> {
  object: "api_key";
  attributes: {
    identifier: string;
    description: string;
    allowed_ips: string[];
    last_used_at: L;
    created_at: C;
  };
}

export type ApiKeysRaw = {
  object: "list";
  data: ApiKey<string>[];
};

export type ApiKeysParsed = {
  object: "list";
  data: ApiKey<Date>[];
};

export interface CreatedApiKey extends ApiKey<null, string> {
  meta: {
    secret_token: string;
  };
}

export interface ReturnedApiKey extends CreatedApiKey {
  api_key: string;
}

export interface CreateApiKeyArgs extends BaseArgs {
  description: string;
  allowed_ips?: IP[] | undefined;
}

export interface DeleteApiKeyArgs extends BaseArgs {
  identifier: string;
}
