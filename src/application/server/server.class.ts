import type { infer as zInfer, ZodObject } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import type { ApplicationServerManager } from './server.manager.js';
import {
  setManagerCacheSymbol,
  removeManagerCacheSymbol,
} from '../../symbols.js';
import {
  setApplicationServerDetailsSchema,
  setApplicationServerConfigurationSchema,
  setApplicationServerStartupSchema,
} from './server.schemas.js';
import { ServerDatabaseManager } from './database/database.manager.js';
import type {
  BaseApplicationServer,
  UpdateApplicationServerPayload,
  ApplicationServerObject,
  Status,
} from './server.types.js';
import type { BaseFetchOptions } from '../../types.js';

export class ApplicationServer<ServerStatus extends Status = Status> {
  public id!: number;
  public externalId!: null | string;
  public uuid!: string;
  public identifier!: string;
  public name!: string;
  public description!: string;
  public suspended!: ServerStatus extends 'suspended' ? true : false;
  public limits!: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: string | null;
    oomDisabled: boolean;
  };
  public featureLimits!: {
    databases: number;
    allocations: number;
    backups: number;
  };
  public user!: number;
  public node!: number;
  public allocation!: number;
  public nest!: number;
  public egg!: number;
  public container!: {
    startupCommand: string;
    image: string;
    environment: Record<string, string | number>;
    installed: ServerStatus extends 'installing' ? 0 : 1;
  };
  public updatedAt!: Date;
  public createdAt!: Date;

  public databases!: ServerDatabaseManager;
  private databasesTtl: number | undefined;

  constructor(
    private httpClient: HttpClient,
    private serverManager: ApplicationServerManager,
    data: Partial<BaseApplicationServer> &
      (
        | Pick<BaseApplicationServer, 'id'>
        | Pick<BaseApplicationServer, 'externalId'>
      ),
    databasesTtl?: number,
  ) {
    Object.assign(this, data);
    this.databasesTtl = databasesTtl;
    if (this.id) {
      this.databases = new ServerDatabaseManager(
        this.httpClient,
        this.id,
        databasesTtl,
      );
    }
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<ApplicationServerObject>(
          'GET',
          `/application/servers/${this.id ?? `external/${this.externalId}`}`,
          { parseDates: true },
        )
      ).attributes,
    );

    if (this.id && !this.databases) {
      this.databases = new ServerDatabaseManager(
        this.httpClient,
        this.id,
        this.databasesTtl,
      );
    }

    this.serverManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async update(
    payload: UpdateApplicationServerPayload,
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<this> {
    const { details, configuration, startup } = payload;
    const basePath = `/application/servers/${this.id}`;
    const updates: {
      data: object | undefined;
      endpoint: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      schema: ZodObject<any>;
    }[] = [
      {
        data: details,
        endpoint: 'details',
        schema: setApplicationServerDetailsSchema,
      },
      {
        data: configuration,
        endpoint: 'build',
        schema: setApplicationServerConfigurationSchema,
      },
      {
        data: startup,
        endpoint: 'startup',
        schema: setApplicationServerStartupSchema,
      },
    ];

    const requests = updates
      .filter(({ data }) => !!data)
      .map(({ data, endpoint, schema }) =>
        this.httpClient.request<
          ApplicationServerObject,
          zInfer<typeof setApplicationServerDetailsSchema>
        >('PATCH', `${basePath}/${endpoint}`, schema.parse(data), {
          parseDates: true,
        }),
      );

    if (requests.length === 0)
      throw new Error('Aucunes modifications spécifiées !');

    Object.assign(this, (await Promise.all(requests))[0]!.attributes);
    if (this.id && !this.databases) {
      this.databases = new ServerDatabaseManager(
        this.httpClient,
        this.id,
        this.databasesTtl,
      );
    }

    this.serverManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async suspend(): Promise<void> {
    await this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/suspend`,
    );
  }

  async unsuspend(): Promise<void> {
    await this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/unsuspend`,
    );
  }

  async reinstall(): Promise<void> {
    await this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/reinstall`,
    );
  }

  async delete(force?: boolean): Promise<void> {
    this.serverManager[removeManagerCacheSymbol](this.id);
    if (this.externalId)
      this.serverManager[removeManagerCacheSymbol](this.externalId);

    await this.httpClient.request(
      'DELETE',
      `/application/servers/${this.id}${force ? '?force=true' : ''}`,
    );
  }
}
