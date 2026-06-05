import type { BasePayload } from '../../../types.js';

export interface UpdateAllocationPayload extends BasePayload {
  notes?: string | undefined;
}
