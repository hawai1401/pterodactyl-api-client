import type { PaginationFetchOptions, IPv4, Sort } from '../../../types.js';
export interface FetchActivityOptions<Event extends UserEvent> extends PaginationFetchOptions {
    filter?: {
        event?: Event | undefined;
    };
    sort?: {
        timestamp?: Sort | undefined;
    };
}
export type CreateDelete = 'create' | 'delete';
export type AccountApiKeyEvent = `api-key.${CreateDelete}`;
export type AccountSshKeyEvent = `ssh-key.${CreateDelete}`;
export type AccountEvent = 'account.email-changed' | 'account.password-changed';
export type AccountTwoFactorEvent = `two-factor.${CreateDelete}`;
export type AccountAuthEvent = 'success' | 'fail' | 'checkpoint' | 'token';
export type UserEvent = `user:${AccountApiKeyEvent | AccountSshKeyEvent | AccountEvent | AccountTwoFactorEvent}` | `auth:${AccountAuthEvent}`;
export type AccountActivityProperties<Event extends UserEvent> = (Event extends AccountApiKeyEvent ? {
    identifier: string;
} : never) & (Event extends AccountSshKeyEvent ? {
    fingerprint: string;
} : never) & (Event extends 'user:account.email-changed' ? {
    old: string;
    new: string;
} : never) & (Event extends AccountAuthEvent ? {
    useragent: string;
    ip: Event extends 'auth:success' ? IPv4 : '[hidden]';
} : never) & (Event extends 'auth:fail' ? {
    username: null;
} : never);
export interface AccountActivityObject<Event extends UserEvent = UserEvent> {
    object: 'activity_log';
    attributes: {
        id: string;
        batch: null;
        event: Event;
        is_api: boolean;
        ip: IPv4;
        description: null;
        properties: AccountActivityProperties<Event>;
        has_additional_metadata: boolean;
        timestamp: Date;
    };
}
export interface AccountActivity<Event extends UserEvent = UserEvent> {
    id: string;
    batch: null;
    event: Event;
    isApi: boolean;
    ip: IPv4;
    description: null;
    properties: AccountActivityProperties<Event>;
    hasAdditionalMetadata: boolean;
    timestamp: Date;
}
//# sourceMappingURL=activity.types.d.ts.map