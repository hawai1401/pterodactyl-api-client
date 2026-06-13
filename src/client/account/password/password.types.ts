import type { BasePayload } from '../../../types.js';
import type { BaseUpdateAccountPayload } from '../account.types.js';

export interface SetPasswordPayload
  extends BasePayload, BaseUpdateAccountPayload {
  current_password: string;
  password_confirmation: string;
}
