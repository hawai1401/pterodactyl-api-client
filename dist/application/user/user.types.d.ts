import type { BaseFetchOptions, BasePayload, Filters, PaginationFetchOptions, Sorts } from '../../types.js';
import type { ApplicationServer } from '../server/server.class.js';
import type { ApplicationServerObject } from '../server/server.types.js';
export type UserId = number;
export type UserExternalId = string;
export interface UserIds {
    id?: UserId | undefined;
    external_id?: string | undefined;
}
export interface ListUsersOptions<IncludeServers extends boolean> extends PaginationFetchOptions, Omit<BaseFetchOptions, 'force'> {
    includeServers?: IncludeServers;
    filter?: Filters<'uuid' | 'username' | 'email' | 'external_id'>;
    sort?: Sorts<'id' | 'uuid'>;
}
export interface FetchUserOptions<IncludeServers extends boolean> extends BaseFetchOptions, Omit<BaseFetchOptions, 'force'> {
    includeServers?: IncludeServers;
}
export interface UserObjectAttributes {
    id: number;
    external_id: null | string;
    uuid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
    root_admin: true;
    '2fa': boolean;
    created_at: Date;
    updated_at: Date;
}
export interface UserObjectAttributesWithServers extends UserObjectAttributes {
    relationships: {
        servers: {
            object: 'list';
            data: ApplicationServerObject[];
        };
    };
}
export interface UserObject<IncludeServers extends boolean = false> {
    object: 'user';
    attributes: IncludeServers extends true ? UserObjectAttributesWithServers : UserObjectAttributes;
}
export interface BaseUser {
    id: number;
    externalId: string | null;
    uuid: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    language: string;
    rootAdmin: true;
    '2fa': boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserWithServers extends BaseUser {
    servers: ApplicationServer[];
}
export type User<IncludeServers extends boolean = false> = IncludeServers extends true ? UserWithServers : BaseUser;
export interface CreateUserPayload extends BasePayload {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password?: string | undefined;
    language?: string | undefined;
    root_admin?: boolean | undefined;
    external_id?: string | undefined;
}
export type UpdateUserOptions = Omit<BaseFetchOptions, 'force'>;
//# sourceMappingURL=user.types.d.ts.map