import type { BasePayload } from '../../types.js';

export interface UpdateLocationPayload extends BasePayload {
  short?: string | undefined;
  long?: string | undefined;
}
