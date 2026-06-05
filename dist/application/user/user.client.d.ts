import type { HttpClient } from '../../class/HttpClient.js';
import type { CreateUserPayload, User } from '../users/users.types.js';
import type { FetchUserOptions, UserId } from './user.types.js';
export declare class UserClient {
    private httpClient;
    readonly id: number | undefined;
    readonly external_id: string | undefined;
    constructor(httpClient: HttpClient, ids: UserId);
    fetch<IncludeServers extends boolean>(options?: FetchUserOptions<IncludeServers>): Promise<User<IncludeServers extends true ? IncludeServers : false>>;
    edit(payload: CreateUserPayload): Promise<User>;
    delete(): Promise<void>;
}
//# sourceMappingURL=user.client.d.ts.map