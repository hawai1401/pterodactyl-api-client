import type { BasePayload } from '../../../types.js';
import type { Signal } from '../server.types.js';

export interface PowerPayload extends BasePayload {
  signal: Signal;
}
