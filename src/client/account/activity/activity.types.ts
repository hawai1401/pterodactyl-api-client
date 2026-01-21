import type { IP } from "../../../types.js";

export interface listActivityArgs {
  page?: number | undefined;
  per_page?: number | undefined;
  event?: UserEvent | AuthEvent | undefined;
}

export type UserEvent =
  | "user:api-key.create"
  | "user:api-key.delete"
  | "user:ssh-key.create"
  | "user:ssh-key.delete"
  | "user:account.email-changed"
  | "user:account.password-changed"
  | "user:two-factor.create"
  | "user:two-factor.delete";

export type AuthEvent = "auth:success" | "auth:fail" | "auth:checkpoint";

export interface UserActivityList<U, T extends UserEvent | AuthEvent> {
  object: "list";
  data: UserActivityEvent<U, T>[];
}

export interface UserActivityEvent<
  T,
  U extends UserEvent | AuthEvent = UserEvent | AuthEvent,
> {
  object: "activity_log";
  attributes: {
    id: string;
    batch: null;
    event: U;
    is_api: boolean;
    ip: IP;
    description: null;
    properties: {
      identifier: U extends "user:api-key.create"
        ? string
        : U extends "user:api-key.delete"
          ? string
          : undefined;
      fingerprint: U extends "user:ssh-key.create"
        ? string
        : U extends "user:ssh-key.delete"
          ? string
          : undefined;
      old: U extends "user:email-changed" ? string : undefined;
      new: U extends "user:email-changed" ? string : undefined;
    };
    has_additional_metadata: boolean;
    timestamp: T;
  };
}
