import type { BasePayload } from '../../../types.js';

export interface SetImagePayload extends BasePayload {
  docker_image: string;
}
