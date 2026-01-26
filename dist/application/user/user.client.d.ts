import type HttpClient from "../../class/HttpClient.js";
import type { CreateUserArgs, User, UserAttributes, UserWithServersAttributes } from "./user.types.js";
export default class UserClient {
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
    info<T extends boolean | undefined>({ id, external_id, }: {
        id?: number | undefined;
        external_id?: string | undefined;
    }, { includeServers }?: {
        includeServers?: T;
    }): Promise<{
        attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
            created_at: Date;
            updated_at: Date;
        };
        object: "user";
    } | {
        attributes: (T extends true ? UserWithServersAttributes : UserAttributes<string>) & {
            created_at: Date;
            updated_at: Date;
        };
        object: "user";
    }>;
    create(args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
    edit(id: number, args: CreateUserArgs): Promise<User<UserAttributes<string>>>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=user.client.d.ts.map