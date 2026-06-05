import type { infer as zInfer } from 'zod';
import type { BaseUpdateAccountPayload } from '../account.types.js';
import type {
  A2fCredentials,
  A2fData,
  EnableA2fPayload,
  RecoveryTokens,
  RecoveryTokensObject,
} from './a2f.types.js';
import { a2fSchema, passwordSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';

export class A2fClient extends BaseClient {
  async enable(payload: EnableA2fPayload): Promise<RecoveryTokens> {
    const recoveryTokensObject = await this.httpClient.request<
      RecoveryTokensObject,
      zInfer<typeof a2fSchema>
    >('POST', '/client/account/two-factor', a2fSchema.parse(payload));
    return recoveryTokensObject.attributes.tokens as RecoveryTokens;
  }

  disable(payload: BaseUpdateAccountPayload) {
    return this.httpClient.request<void, zInfer<typeof passwordSchema>>(
      'POST',
      '/client/account/two-factor/disable',
      passwordSchema.parse(payload),
    );
  }

  async getCredentials(): Promise<A2fCredentials> {
    const a2fData = await this.httpClient.request<A2fData>(
      'GET',
      '/client/account/two-factor',
    );
    return a2fData.data;
  }
}
