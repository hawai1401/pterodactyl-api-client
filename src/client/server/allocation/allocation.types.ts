import type { BasePayload } from '../../../types.js';

export interface EditAllocationPayload extends BasePayload {
  notes?: string | undefined;
}
