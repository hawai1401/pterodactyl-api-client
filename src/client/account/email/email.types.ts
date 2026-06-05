import type { BaseEditAccountPayload } from '../account.types.js';

export interface SetEmailPayload extends BaseEditAccountPayload {
  email: string;
}
