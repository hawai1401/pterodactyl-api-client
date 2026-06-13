import type { HttpClient } from '../../class/HttpClient.js';
import type { Server } from '../server/server.class.js';
import type { BaseUser, CreateUserPayload, FetchUserOptions, UpdateUserOptions } from './user.types.js';
import type { UserManager } from './user.manager.js';
export declare class User<HasServers extends boolean = boolean> {
    private httpClient;
    private userManager;
    id: number;
    externalId: string | null;
    uuid: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    language: string;
    rootAdmin: boolean;
    '2fa': boolean;
    createdAt: Date;
    updatedAt: Date;
    servers?: HasServers extends true ? Server[] : never;
    constructor(httpClient: HttpClient, userManager: UserManager, data: Partial<BaseUser> & Pick<BaseUser, 'id'> & (HasServers extends true ? {
        servers: Server[];
    } : Record<never, never>));
    fetch<IncludeServers extends boolean>(options?: FetchUserOptions<IncludeServers>): Promise<User<IncludeServers>>;
    update(payload: CreateUserPayload, options?: UpdateUserOptions): Promise<this>;
    delete(): Promise<void>;
}
//# sourceMappingURL=user.class.d.ts.map