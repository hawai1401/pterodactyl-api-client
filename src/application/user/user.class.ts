import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';
import type { ApplicationServer } from '../server/server.class.js';
import type {
  BaseUser,
  CreateUserPayload,
  FetchUserOptions,
  UpdateUserOptions,
  UserObject,
} from './user.types.js';
import type { UserManager } from './user.manager.js';
import {
  removeManagerCacheSymbol,
  setManagerCacheSymbol,
} from '../../symbols.js';
import { createUserSchema } from './user.schemas.js';

export class User<HasServers extends boolean = boolean> {
  public id!: number;
  public externalId!: string | null;
  public uuid!: string;
  public username!: string;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public language!: string;
  public rootAdmin!: boolean;
  public '2fa'!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;

  public servers?: HasServers extends true ? ApplicationServer[] : never;

  constructor(
    private httpClient: HttpClient,
    private userManager: UserManager,
    data: Partial<BaseUser> &
      Pick<BaseUser, 'id'> &
      (HasServers extends true
        ? {
            servers: ApplicationServer[];
          }
        : Record<never, never>),
  ) {
    Object.assign(this, data);
  }

  async fetch<IncludeServers extends boolean>(
    options?: FetchUserOptions<IncludeServers>,
  ): Promise<User<IncludeServers>> {
    const userObject = await this.httpClient.request<
      UserObject<IncludeServers extends true ? IncludeServers : false>
    >(
      'GET',
      `/application/users/${this.id ?? `external/${this.externalId}`}${options?.includeServers ? '?include=servers' : ''}`,
      { parseDates: true },
    );

    if (!options?.includeServers) Object.assign(this, userObject.attributes);
    else {
      const { relationships, ...attributes } = (
        userObject as CamelCasedProperties<UserObject<true>>
      ).attributes;

      Object.assign(this, {
        ...attributes,
        servers: relationships.servers.data.map(
          (serverObject) => serverObject.attributes,
        ),
      });
    }

    this.userManager[setManagerCacheSymbol](this, options?.cache);

    return this as unknown as User<IncludeServers>;
  }

  async update(
    payload: CreateUserPayload,
    options?: UpdateUserOptions,
  ): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<
          UserObject,
          zInfer<typeof createUserSchema>
        >(
          'PATCH',
          `/application/users/${this.id}`,
          createUserSchema.parse(payload),
          { parseDates: true },
        )
      ).attributes,
    );

    this.userManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async delete(): Promise<void> {
    this.userManager[removeManagerCacheSymbol](this.id);
    if (this.externalId)
      this.userManager[removeManagerCacheSymbol](this.externalId);

    await this.httpClient.request('DELETE', `/application/users/${this.id}`);
  }
}
