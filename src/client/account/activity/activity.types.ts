import type { IP, ListwithPagination } from '../../../types.js';

export interface listActivityArgs {
  page?: number | undefined;
  per_page?: number | undefined;
  event?: UserEvent | AuthEvent | undefined;
}

export type UserApiKeyEvent = 'user:api-key.create' | 'user:api-key.delete';
export type UserSshKeyEvent = 'user:ssh-key.create' | 'user:ssh-key.delete';
export type UserAccountEvent =
  | 'user:account.email-changed'
  | 'user:account.password-changed';
export type UserTwoFactorEvent =
  | 'user:two-factor.create'
  | 'user:two-factor.delete';

export type UserEvent =
  | UserApiKeyEvent
  | UserSshKeyEvent
  | UserAccountEvent
  | UserTwoFactorEvent;

export type AuthEvent = 'auth:success' | 'auth:fail' | 'auth:checkpoint';

export interface UserActivityList<
  U,
  T extends UserEvent | AuthEvent,
> extends ListwithPagination {
  data: UserActivityEvent<U, T>[];
}

type UserActivityProperties<U extends UserEvent | AuthEvent> =
  (U extends UserApiKeyEvent ? { identifier: string } : never) &
    (U extends UserSshKeyEvent ? { fingerprint: string } : never) &
    (U extends 'user:email-changed' ? { old: string; new: string } : never);

export interface UserActivityEvent<
  T,
  U extends UserEvent | AuthEvent = UserEvent | AuthEvent,
> {
  object: 'activity_log';
  attributes: {
    id: string;
    batch: null;
    event: U;
    is_api: boolean;
    ip: IP;
    description: null;
    properties: UserActivityProperties<U>;
    has_additional_metadata: boolean;
    timestamp: T;
  };
}
