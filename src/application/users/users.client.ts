import z from 'zod';
import type HttpClient from '../../class/HttpClient.js';
import { createUserSchema, listUsersFilterSchema } from './users.schemas.js';
import type {
  CreateUserArgs,
  User,
  UserAttributes,
  UserList,
  UserWithServersAttributes,
} from './users.types.js';
import type { BaseListArgs, Sort } from '../../types.js';
import buildQueryParams from '../../utils/buildQueryParams.js';

export default class UsersClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends boolean | undefined>(
    options: {
      includeServers?: T | undefined;
      filter?:
        | {
            uuid?: string | undefined;
            username?: string | undefined;
            email?: string | undefined;
            external_id?: string | undefined;
          }
        | undefined;
      sort?:
        | {
            id?: Sort | undefined;
            uuid?: Sort | undefined;
          }
        | undefined;
    } & BaseListArgs = {},
  ) {
    const filter = listUsersFilterSchema.optional().parse(options.filter);
    const queries = buildQueryParams<
      {
        uuid?: string | undefined;
        username?: string | undefined;
        email?: string | undefined;
        external_id?: string | undefined;
      },
      { id?: Sort | undefined; uuid?: Sort | undefined }
    >({
      page: options.page,
      per_page: options.per_page,
      sort: options.sort,
      filter,
    });
    const res = await this.httpClient.request<
      UserList<
        T extends true ? UserWithServersAttributes : UserAttributes<string>
      >
    >(
      'GET',
      `/application/users?${queries}${options.includeServers ? '&include=servers' : ''}`,
    );
    return {
      ...res,
      data: res.data.map((user) => ({
        ...user,
        attributes: {
          ...user.attributes,
          created_at: new Date(user.attributes.created_at),
          updated_at: new Date(user.attributes.updated_at),
          relationships: options.includeServers
            ? {
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
              }
            : undefined,
        },
      })),
    };
  }

  create(args: CreateUserArgs) {
    return this.httpClient.request<
      User<UserAttributes<string>>,
      z.infer<typeof createUserSchema>
    >('POST', '/application/users', createUserSchema.parse(args));
  }
}
