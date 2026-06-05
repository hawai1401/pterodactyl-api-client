import type { infer as zInfer } from 'zod';
import { createUserSchema, listUsersFilterSchema } from './users.schemas.js';
import type {
  CreateUserPayload,
  FetchUsersOptions,
  User,
  UserObject,
} from './users.types.js';
import type { ObjectListWithPagination, Paginated } from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';
import { BaseClient } from '../../class/BaseClient.js';

export class UsersClient extends BaseClient {
  async fetch<IncludeServers extends boolean>(
    options?: FetchUsersOptions<IncludeServers>,
  ): Promise<
    Paginated<User<IncludeServers extends true ? IncludeServers : false>>
  > {
    const filter = listUsersFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({
      ...options,
      filter,
    });

    const userObjectList = await this.httpClient.request<
      ObjectListWithPagination<
        UserObject<IncludeServers extends true ? IncludeServers : false>
      >
    >(
      'GET',
      `/application/users?${queries}${options?.includeServers ? '&include=servers' : ''}`,
      { parseDates: true },
    );

    return {
      data: userObjectList.data.map((userObject) => {
        if (!options?.includeServers)
          return (userObject as CamelCasedProperties<UserObject<false>>)
            .attributes as User<
            IncludeServers extends true ? IncludeServers : false
          >;

        const { relationships, ...attributes } = (
          userObject as CamelCasedProperties<UserObject<true>>
        ).attributes;

        return {
          ...attributes,
          servers: relationships.servers.data.map(
            (serverObject) => serverObject.attributes,
          ),
        } as User<IncludeServers extends true ? IncludeServers : false>;
      }),
      pagination: userObjectList.meta.pagination,
    };
  }

  async create(payload: CreateUserPayload): Promise<User> {
    const userObject = await this.httpClient.request<
      UserObject,
      zInfer<typeof createUserSchema>
    >('POST', '/application/users', createUserSchema.parse(payload), {
      parseDates: true,
    });
    return userObject.attributes;
  }
}
