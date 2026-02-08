import type HttpClient from "../../class/HttpClient.js";
import type { CreateUserArgs, User, UserAttributes, UserWithServersAttributes } from "./users.types.js";
export default class UsersClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends boolean | undefined>({ includeServers, }?: {
        includeServers?: T;
    }): Promise<{
        data: {
            attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
                created_at: Date;
                updated_at: Date;
            };
            object: "user";
        }[];
        meta: {
            pagination: import("../../types.js").Pagination;
        };
        object: "list";
    }>;
    create(args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
}
//# sourceMappingURL=users.client.d.ts.map