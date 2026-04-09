import z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import type { EditAcountArgs } from '../account.types.js';
import type { A2FData, EnableA2fArgs, RecoveryTokens } from './a2f.types.js';
import { a2fSchema, passwordSchema } from '../account.schemas.js';

export default class A2fClient {
  constructor(private httpClient: HttpClient) {}

  enable(options: EnableA2fArgs) {
    return this.httpClient.request<RecoveryTokens, z.infer<typeof a2fSchema>>(
      'POST',
      '/client/account/two-factor',
      a2fSchema.parse(options),
    );
  }

  disable(options: EditAcountArgs) {
    return this.httpClient.request<void, z.infer<typeof passwordSchema>>(
      'POST',
      '/client/account/two-factor/disable',
      passwordSchema.parse(options),
    );
  }

  qrCode(): Promise<A2FData> {
    return this.httpClient.request<A2FData>(
      'GET',
      '/client/account/two-factor',
    );
  }
}
