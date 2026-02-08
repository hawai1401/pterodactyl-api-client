import type HttpClient from "../../class/HttpClient.js";
import type { CreateUserArgs, User, UserAttributes, UserWithServersAttributes } from "../users/users.types.js";
import type { UserId } from "./user.types.js";
export default class UserClient {
    private httpClient;
    readonly id: number | undefined;
    readonly external_id: string | undefined;
    constructor(httpClient: HttpClient, args: UserId);
    info<T extends boolean | undefined>({ includeServers, }?: {
        includeServers?: T;
    }): Promise<{
        attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
            created_at: Date;
            updated_at: Date;
        };
        object: "user";
    }>;
    edit(args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
    delete(): Promise<void>;
}
//# sourceMappingURL=user.client.d.ts.map