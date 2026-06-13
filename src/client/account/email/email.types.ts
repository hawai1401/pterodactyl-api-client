import type { BaseUpdateAccountPayload } from '../account.types.js';

export interface SetEmailPayload extends BaseUpdateAccountPayload {
  email: string;
}
