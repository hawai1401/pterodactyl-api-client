import type { BaseFetchOptions, Paginated } from '../../types.js';
import type { CreateUserPayload, FetchUserOptions, ListUsersOptions, UserExternalId, UserId, UserIds } from './user.types.js';
import { User } from './user.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { ServerManager } from '../server/server.manager.js';
export declare class UserManager extends BaseCacheManager<UserId | UserExternalId, User> {
    private httpClient;
    private serverManager;
    constructor(httpClient: HttpClient, serverManager: ServerManager, cacheTtl?: number);
    list<IncludeServers extends boolean = false>(options?: ListUsersOptions<IncludeServers>): Promise<Paginated<User<IncludeServers extends true ? IncludeServers : false>>>;
    fetch<IncludeServers extends boolean>(user: UserIds, options?: FetchUserOptions<IncludeServers>): Promise<User<IncludeServers extends true ? IncludeServers : false>>;
    resolve(user: UserId): User;
    create(payload: CreateUserPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<User<false>>;
}
//# sourceMappingURL=user.manager.d.ts.map