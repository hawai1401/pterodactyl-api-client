import type { BaseArgs, IP, List } from '../../../types.js';

export interface ApiKey<L, C = L> {
  object: 'api_key';
  attributes: {
    identifier: string;
    description: string;
    allowed_ips: string[];
    last_used_at: L;
    created_at: C;
  };
}

export interface ApiKeysRaw extends List {
  data: ApiKey<string>[];
}

export interface ApiKeysParsed extends List {
  data: ApiKey<Date>[];
}

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
