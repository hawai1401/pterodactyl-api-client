import type { infer as zInfer } from 'zod';
import type { SetPasswordPayload } from './password.types.js';
import { setPasswordSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';

export class PasswordClient extends BaseClient {
  set(payload: SetPasswordPayload) {
    return this.httpClient.request<void, zInfer<typeof setPasswordSchema>>(
      'PUT',
      '/client/account/password',
      setPasswordSchema.parse(payload),
    );
  }
}
