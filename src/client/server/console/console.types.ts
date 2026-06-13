import type { BasePayload } from '../../../types.js';

export interface SendConsoleCommandPayload extends BasePayload {
  command: string;
}
