import type { BasePayload, IPv4 } from '../../../types.js';

export interface ApiKeyObject<IsNew extends boolean = boolean> {
  object: 'api_key';
  attributes: {
    identifier: string;
    description: string;
    allowed_ips: IPv4[];
    last_used_at: IsNew extends true ? null : Date;
    created_at: Date;
  };
}
export interface ApiKey<IsNew extends boolean = boolean> {
  identifier: string;
  description: string;
  allowedIps: IPv4[];
  lastUsedAt: IsNew extends true ? null : Date;
  createdAt: Date;
}

export interface CreateApiKeyPayload extends BasePayload {
  description: string;
  allowed_ips?: IPv4[] | undefined;
}
export interface CreatedApiKeyObject extends ApiKeyObject<true> {
  meta: {
    secret_token: string;
  };
}
export interface CreatedApiKey extends ApiKey<true> {
  key: string;
}

export interface DeleteApiKeyPayload extends BasePayload {
  identifier: string;
}
