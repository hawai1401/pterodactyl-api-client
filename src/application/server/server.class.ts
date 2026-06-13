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
import { ApplicationServerDatabaseManager } from './database/database.manager.js';
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

  public databases!: ApplicationServerDatabaseManager;

  constructor(
    private httpClient: HttpClient,
    private serverManager: ApplicationServerManager,
    data: Partial<BaseApplicationServer> &
      (
        | Pick<BaseApplicationServer, 'id'>
        | Pick<BaseApplicationServer, 'externalId'>
      ),
  ) {
    Object.assign(this, data);
    if (this.id) {
      this.databases = new ApplicationServerDatabaseManager(
        this.httpClient,
        this.id,
      );
    }
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    const serverObject = await this.httpClient.request<ApplicationServerObject>(
      'GET',
      `/application/servers/${this.id ?? `external/${this.externalId}`}`,
      { parseDates: true },
    );

    Object.assign(this, serverObject.attributes);
    if (this.id && !this.databases) {
      this.databases = new ApplicationServerDatabaseManager(
        this.httpClient,
        this.id,
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

    const [serverObject] = await Promise.all(requests);

    Object.assign(this, serverObject!.attributes);
    if (this.id && !this.databases) {
      this.databases = new ApplicationServerDatabaseManager(
        this.httpClient,
        this.id,
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
