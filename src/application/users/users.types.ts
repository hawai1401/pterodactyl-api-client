import type {
  UserServer,
  UserServerAttributesWithDate,
} from "../../client/server/index.js";
import type { BaseArgs, ListwithPagination } from "../../types.js";

export interface UserAttributes<T extends string | Date> {
  id: number;
  external_id: null | string;
  uuid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  language: string;
  root_admin: true;
  "2fa": boolean;
  created_at: T;
  updated_at: T;
}

export interface User<
  T extends UserAttributes<string> | UserWithServersAttributes,
> {
  object: "user";
  attributes: T;
}

export interface UserWithServersAttributes extends UserAttributes<string> {
  relationships: {
    servers: {
      object: "list";
      data: UserServer<UserServerAttributesWithDate<string>>[];
    };
  };
}

export interface UserList<
  T extends UserAttributes<string> | UserWithServersAttributes,
> extends ListwithPagination {
  data: User<T>[];
}

export interface CreateUserArgs extends BaseArgs {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password?: string | undefined;
  language?: string | undefined;
  root_admin?: boolean | undefined;
  external_id?: string | undefined;
}
