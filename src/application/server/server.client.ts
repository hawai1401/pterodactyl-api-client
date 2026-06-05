import type { infer as zInfer, ZodObject } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import { DatabaseClient } from './database/database.client.js';
import {
  applicationServerIdSchema,
  setApplicationServerConfigurationSchema,
  setApplicationServerDetailsSchema,
  setApplicationServerStartupSchema,
} from './server.schemas.js';
import type {
  ApplicationServerId,
  UpdateApplicationServerPayload,
} from './server.types.js';
import { DatabasesClient } from './databases/databases.client.js';
import type {
  ApplicationServer,
  ApplicationServerObject,
} from '../servers/servers.types.js';

export class ServerClient<Ids extends ApplicationServerId> {
  declare public databases: Ids['id'] extends number ? DatabasesClient : never;

  readonly id: number | undefined;
  readonly external_id: string | undefined;

  constructor(
    private httpClient: HttpClient,
    ids: Ids,
  ) {
    const { id, external_id } = applicationServerIdSchema.parse(ids);

    this.id = id;
    this.external_id = external_id;

    if (id)
      this.databases = new DatabasesClient(
        httpClient,
        id,
      ) as Ids['id'] extends number ? DatabasesClient : never;
  }

  database(database: number) {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return new DatabaseClient(this.httpClient, this.id, database);
  }

  async fetch(): Promise<ApplicationServer> {
    const serverObject = await this.httpClient.request<ApplicationServerObject>(
      'GET',
      `/application/servers/${this.id ?? `external/${this.external_id}`}`,
      { parseDates: true },
    );
    return serverObject.attributes;
  }

  async update({
    details,
    configuration,
    startup,
  }: UpdateApplicationServerPayload): Promise<ApplicationServer> {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    const basePath = `/application/servers/${this.id}`;
    const updates: {
      data: object | undefined;
      endpoint: string;
      schema: ZodObject;
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

    return serverObject!.attributes;
  }

  suspend() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/suspend`,
    );
  }

  unsuspend() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/unsuspend`,
    );
  }

  reinstall() {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request(
      'POST',
      `/application/servers/${this.id}/reinstall`,
    );
  }

  delete(force?: boolean | undefined) {
    if (!this.id) throw new Error("L'id du serveur est nécessaire !");
    return this.httpClient.request(
      'DELETE',
      `/application/servers/${this.id}${force ? '?force=true' : ''}`,
    );
  }
}
