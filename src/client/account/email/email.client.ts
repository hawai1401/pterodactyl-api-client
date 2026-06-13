import type { infer as zInfer } from 'zod';
import type { SetEmailPayload } from './email.types.js';
import { setEmailSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';

export class EmailClient extends BaseClient {
  set(payload: SetEmailPayload) {
    return this.httpClient.request<void, zInfer<typeof setEmailSchema>>(
      'PUT',
      '/client/account/email',
      setEmailSchema.parse(payload),
    );
  }
}
