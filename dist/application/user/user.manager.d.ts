import type { BaseFetchOptions, NonMethodPartial, Paginated } from '../../types.js';
import type { CreateUserPayload, FetchUserOptions, ListUsersOptions, UserExternalId, UserId, UserIds } from './user.types.js';
import { ApplicationUser } from './user.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { ApplicationServerManager } from '../server/server.manager.js';
export declare class ApplicationUserManager extends BaseCacheManager<UserId | UserExternalId, ApplicationUser> {
    private httpClient;
    private serverManager;
    constructor(httpClient: HttpClient, serverManager: ApplicationServerManager, cacheTtl?: number);
    list<IncludeServers extends boolean = false>(options?: ListUsersOptions<IncludeServers>): Promise<Paginated<ApplicationUser<IncludeServers extends true ? IncludeServers : false>>>;
    fetch<IncludeServers extends boolean>(user: UserIds, options?: FetchUserOptions<IncludeServers>): Promise<ApplicationUser<IncludeServers extends true ? IncludeServers : false>>;
    resolve(user: UserId): ApplicationUser | (NonMethodPartial<ApplicationUser> & Pick<ApplicationUser, 'id'>);
    create(payload: CreateUserPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<ApplicationUser<false>>;
}
//# sourceMappingURL=user.manager.d.ts.map