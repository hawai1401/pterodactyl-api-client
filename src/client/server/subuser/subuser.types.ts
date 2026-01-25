import type { BaseArgs, List } from "../../../types.js";
import type { ServerPermissions } from "../server.types.js";

export interface Subuser<T extends string | Date> {
  object: "server_subuser";
  attributes: {
    uuid: string;
    username: string;
    email: string;
    image: string;
    "2fa_enabled": boolean;
    created_at: T;
    permissions: ServerPermissions[];
  };
}

export interface SubuserList extends List {
  data: Subuser<string>[];
}

export interface CreateSubuserArgs extends BaseArgs {
  email: string;
  permissions: ServerPermissions[];
}

export interface EditSubuserArgs extends BaseArgs {
  permissions: ServerPermissions[];
}
