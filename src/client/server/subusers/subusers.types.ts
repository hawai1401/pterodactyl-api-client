import type { BasePayload } from '../../../types.js';
import type { ServerPermissions } from '../server.types.js';

export interface SubuserObject {
  object: 'server_subuser';
  attributes: {
    uuid: string;
    username: string;
    email: string;
    image: string;
    '2fa_enabled': boolean;
    created_at: Date;
    permissions: ServerPermissions[];
  };
}
export interface Subuser {
  uuid: string;
  username: string;
  email: string;
  image: string;
  '2faEnabled': boolean;
  createdAt: Date;
  permissions: ServerPermissions[];
}

export interface CreateSubuserPayload extends BasePayload {
  email: string;
  permissions: ServerPermissions[];
}
