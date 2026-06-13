import type { BasePayload } from '../../../types.js';
import type { ServerPermissions } from '../server.types.js';

export interface SetSubuserPermissionsPayload extends BasePayload {
  permissions: ServerPermissions[];
}
