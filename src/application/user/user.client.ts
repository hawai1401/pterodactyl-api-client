import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import { userIdSchema } from './user.schemas.js';
import type {
  CreateUserPayload,
  User,
  UserObject,
} from '../users/users.types.js';
import { createUserSchema } from '../users/users.schemas.js';
import type { FetchUserOptions, UserId } from './user.types.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';

export class UserClient {
  readonly id: number | undefined;
  readonly external_id: string | undefined;

  constructor(
    private httpClient: HttpClient,
    ids: UserId,
  ) {
    const { id, external_id } = userIdSchema.parse(ids);

    this.id = id;
    this.external_id = external_id;
  }

  async fetch<IncludeServers extends boolean>(
    options?: FetchUserOptions<IncludeServers>,
  ): Promise<User<IncludeServers extends true ? IncludeServers : false>> {
    const userObject = await this.httpClient.request<
      UserObject<IncludeServers extends true ? IncludeServers : false>
    >(
      'GET',
      `/application/users/${this.id ?? `external/${this.external_id}`}${options?.includeServers ? '?include=servers' : ''}`,
      { parseDates: true },
    );

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
  }

  async edit(payload: CreateUserPayload): Promise<User> {
    if (!this.id) throw new Error("L'id de l'utilisateur est requis !");

    const userObject = await this.httpClient.request<
      UserObject,
      zInfer<typeof createUserSchema>
    >(
      'PATCH',
      `/application/users/${this.id}`,
      createUserSchema.parse(payload),
      { parseDates: true },
    );
    return userObject.attributes;
  }

  delete() {
    if (!this.id) throw new Error("L'id de l'utilisateur est requis !");
    return this.httpClient.request('DELETE', `/application/users/${this.id}`);
  }
}
