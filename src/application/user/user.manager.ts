import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';
import type {
  CreateUserPayload,
  FetchUserOptions,
  ListUsersOptions,
  UserExternalId,
  UserId,
  UserIds,
  UserObject,
} from './user.types.js';
import {
  createUserSchema,
  listUsersFilterSchema,
  userId,
  userIdSchema,
} from './user.schemas.js';
import { User } from './user.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { ApplicationServer } from '../server/server.class.js';
import { ApplicationServerManager } from '../server/server.manager.js';

export class UserManager extends BaseCacheManager<
  UserId | UserExternalId,
  User
> {
  constructor(
    private httpClient: HttpClient,
    private serverManager: ApplicationServerManager,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id', 'externalId');
  }

  async list<IncludeServers extends boolean = false>(
    options?: ListUsersOptions<IncludeServers>,
  ): Promise<
    Paginated<User<IncludeServers extends true ? IncludeServers : false>>
  > {
    const queries = buildQueryParams({
      ...options,
      filter: listUsersFilterSchema.optional().parse(options?.filter),
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
          return this.setCache(
            new User(this.httpClient, this, userObject.attributes),
            options?.cache,
          );

        const { relationships, ...attributes } = (
          userObject as CamelCasedProperties<UserObject<true>>
        ).attributes;

        return this.setCache(
          new User(this.httpClient, this, {
            ...attributes,
            servers: relationships.servers.data.map(
              (serverObject) =>
                new ApplicationServer(
                  this.httpClient,
                  this.serverManager,
                  serverObject.attributes,
                ),
            ),
          }),
          options.cache,
        );
      }),
      pagination: userObjectList.meta.pagination,
    };
  }

  async fetch<IncludeServers extends boolean>(
    user: UserIds,
    options?: FetchUserOptions<IncludeServers>,
  ): Promise<User<IncludeServers extends true ? IncludeServers : false>> {
    const cacheUser =
      (user.id && this.getCache(user.id)) ??
      (user.external_id && this.getCache(user.external_id));
    if (
      cacheUser &&
      !options?.force &&
      (options?.includeServers ? !!cacheUser.servers : true)
    )
      return cacheUser;

    const userObject = await this.httpClient.request<
      UserObject<IncludeServers extends true ? IncludeServers : false>
    >(
      'GET',
      `/application/users/${((u) => u.id ?? `external/${u.external_id}`)(
        userIdSchema.parse(user),
      )}${options?.includeServers ? '?include=servers' : ''}`,
      { parseDates: true },
    );

    if (!options?.includeServers)
      return this.setCache(
        new User(this.httpClient, this, userObject.attributes),
        options?.cache,
      );

    const { relationships, ...attributes } = (
      userObject as CamelCasedProperties<UserObject<true>>
    ).attributes;

    return this.setCache(
      new User(this.httpClient, this, {
        ...attributes,
        servers: relationships.servers.data.map(
          (serverObject) =>
            new ApplicationServer(
              this.httpClient,
              this.serverManager,
              serverObject.attributes,
            ),
        ),
      }),
      options.cache,
    );
  }

  resolve(user: UserId): User {
    return super.resolve(
      user,
      () =>
        new User(this.httpClient, this, {
          id: userId.parse(user),
        }),
    );
  }

  async create(
    payload: CreateUserPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<User<false>> {
    return this.setCache(
      new User(
        this.httpClient,
        this,
        (
          await this.httpClient.request<
            UserObject,
            zInfer<typeof createUserSchema>
          >('POST', '/application/users', createUserSchema.parse(payload), {
            parseDates: true,
          })
        ).attributes,
      ),
      options?.cache,
    );
  }
}
