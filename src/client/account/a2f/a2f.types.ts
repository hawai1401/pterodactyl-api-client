import type { Tuple } from '../../../types.js';
import type { BaseEditAccountPayload } from '../account.types.js';

export interface EnableA2fPayload extends BaseEditAccountPayload {
  code: string | number;
}
export type RecoveryTokens = Tuple<string, 8>;
export interface RecoveryTokensObject {
  object: 'recovery_tokens';
  attributes: {
    tokens: RecoveryTokens;
  };
}

export interface A2fData {
  data: {
    image_url_data: string;
    secret: string;
  };
}
export interface A2fCredentials {
  imageUrlData: string;
  secret: string;
}
