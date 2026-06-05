import type { CreateUserPayload, FetchUsersOptions, User } from './users.types.js';
import type { Paginated } from '../../types.js';
import { BaseClient } from '../../class/BaseClient.js';
export declare class UsersClient extends BaseClient {
    fetch<IncludeServers extends boolean>(options?: FetchUsersOptions<IncludeServers>): Promise<Paginated<User<IncludeServers extends true ? IncludeServers : false>>>;
    create(payload: CreateUserPayload): Promise<User>;
}
//# sourceMappingURL=users.client.d.ts.map