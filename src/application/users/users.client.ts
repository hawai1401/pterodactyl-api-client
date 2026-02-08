import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { createUserSchema } from "./users.schemas.js";
import type {
  CreateUserArgs,
  User,
  UserAttributes,
  UserList,
  UserWithServersAttributes,
} from "./users.types.js";

export default class UsersClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends boolean | undefined>({
    includeServers,
  }: { includeServers?: T } = {}) {
    const res = await this.httpClient.request<
      UserList<
        T extends true ? UserWithServersAttributes : UserAttributes<string>
      >
    >("GET", `/application/users${includeServers ? "?include=servers" : ""}`);
    return includeServers
      ? {
          ...res,
          data: res.data.map((user) => ({
            ...user,
            attributes: {
              ...user.attributes,
              created_at: new Date(user.attributes.created_at),
              updated_at: new Date(user.attributes.updated_at),
              relationships: {
                ...(user as User<UserWithServersAttributes>).attributes
                  .relationships,
                servers: {
                  ...(user as User<UserWithServersAttributes>).attributes
                    .relationships.servers,
                  ...(
                    user as User<UserWithServersAttributes>
                  ).attributes.relationships.servers.data.map((server) => ({
                    ...server,
                    attributes: {
                      ...server.attributes,
                    },
                  })),
                },
              },
            },
          })),
        }
      : {
          ...res,
          data: res.data.map((user) => ({
            ...user,
            attributes: {
              ...user.attributes,
              created_at: new Date(user.attributes.created_at),
              updated_at: new Date(user.attributes.updated_at),
            },
          })),
        };
  }

  create(args: CreateUserArgs) {
    return this.httpClient.request<
      User<UserAttributes<string>>,
      z.infer<typeof createUserSchema>
    >("POST", "/application/users", createUserSchema.parse(args));
  }
}
