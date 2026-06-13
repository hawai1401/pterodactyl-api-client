import { HttpClient } from '../../class/HttpClient.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';
import type {
  ObjectListWithPagination,
  Paginated,
  BaseFetchOptions,
} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { AllocationClient } from './allocation/allocation.client.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { BackupClient } from './backup/backup.client.js';
import { BackupsClient } from './backups/backups.client.js';
import { ConsoleClient } from './console/console.client.js';
import { DatabaseClient } from './database/database.client.js';
import { DatabasesClient } from './databases/databases.client.js';
import { ImageClient } from './image/image.client.js';
import { PowerClient } from './power/power.client.js';
import { ResourceClient } from './resource/resource.client.js';
import { ScheduleClient } from './schedule/schedule.client.js';
import { SchedulesClient } from './schedules/schedules.client.js';
import {
  setUserServerDetailsSchema,
  userServerActivityEvent,
} from './server.schemas.js';
import type {
  SetUserServerDetailsPayload,
  ServerEvent,
  UserServerWithDetails,
  FetchUserServerActivityLogsOptions,
  ActivityLogObject,
  ActivityLog,
  UserServer,
} from './server.types.js';
import { StartupClient } from './startup/startup.client.js';
import { SubuserClient } from './subuser/subuser.client.js';
import { SubusersClient } from './subusers/subusers.client.js';
import type { ClientServerManager } from './server.manager.js';
import { setManagerCacheSymbol } from '../../symbols.js';

export class ClientServer {
  public serverOwner!: boolean;
  public identifier!: string;
  public serverIdentifier!: string;
  public internalId!: number;
  public uuid!: string;
  public name!: string;
  public node!: string;
  public isNodeUnderMaintenance!: boolean;
  public sftpDetails!: {
    ip: string;
    port: number;
  };
  public description!: string;
  public limits!: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: null | string;
    oomDisabled: boolean;
  };
  public invocation!: string;
  public dockerImage!: string;
  public eggFeatures!: string[];
  public featureLimits!: {
    databases: number;
    allocations: number;
    backups: number;
  };
  public isTransferring!: boolean;
  public status!: 'installing' | 'suspended' | null;
  public isInstalling!: boolean;
  public isSuspended!: boolean;

  public id!: string;

  public allocations: AllocationsClient;
  public backups: BackupsClient;
  public console: ConsoleClient;
  public databases: DatabasesClient;
  public image: ImageClient;
  public power: PowerClient;
  public resource: ResourceClient;
  public schedules: SchedulesClient;
  public startup: StartupClient;
  public subusers: SubusersClient;

  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
    private clientServerManager: ClientServerManager,
    data: Partial<CamelCasedProperties<UserServer['attributes']>> &
      Pick<CamelCasedProperties<UserServer['attributes']>, 'identifier'>,
  ) {
    Object.assign(this, data);
    this.id = this.identifier;

    this.allocations = new AllocationsClient(httpClient, this.id);
    this.backups = new BackupsClient(httpClient, this.id);
    this.console = new ConsoleClient(httpClient, panelUrl, this.id);
    this.databases = new DatabasesClient(httpClient, this.id);
    this.image = new ImageClient(httpClient, this.id);
    this.power = new PowerClient(httpClient, this.id);
    this.resource = new ResourceClient(httpClient, this.id);
    this.schedules = new SchedulesClient(httpClient, this.id);
    this.startup = new StartupClient(httpClient, this.id);
    this.subusers = new SubusersClient(httpClient, this.id);
  }

  async fetchActivityLogs<Event extends ServerEvent>(
    options?: FetchUserServerActivityLogsOptions<Event>,
  ): Promise<Paginated<ActivityLog<Event>>> {
    const event = userServerActivityEvent
      .optional()
      .parse(options?.filter?.event);
    const queries = buildQueryParams({
      ...options,
      filter: { event },
    });
    const activityObjectList = await this.httpClient.request<
      ObjectListWithPagination<ActivityLogObject<Event>>
    >('GET', `/client/servers/${this.id}/activity?${queries}`, {
      parseDates: true,
    });
    return {
      data: activityObjectList.data.map(
        (activityObject) => activityObject.attributes as ActivityLog<Event>,
      ),
      pagination: activityObjectList.meta.pagination,
    };
  }

  allocation(allocation: number) {
    return new AllocationClient(this.httpClient, this.id, allocation);
  }

  backup(backup: string) {
    return new BackupClient(this.httpClient, this.id, backup);
  }

  database(database: string) {
    return new DatabaseClient(this.httpClient, this.id, database);
  }

  schedule(schedule: number) {
    return new ScheduleClient(this.httpClient, this.id, schedule);
  }

  subuser(subuser: string) {
    return new SubuserClient(this.httpClient, this.id, subuser);
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    const serverObject = await this.httpClient.request<UserServerWithDetails>(
      'GET',
      `/client/servers/${this.id}`,
      { parseDates: true },
    );
    Object.assign(this, serverObject.attributes);
    this.clientServerManager[setManagerCacheSymbol](this, options?.cache);
    return this;
  }

  updateDetails(payload: SetUserServerDetailsPayload) {
    return this.httpClient.request<void, SetUserServerDetailsPayload>(
      'POST',
      `/client/servers/${this.id}/settings/rename`,
      setUserServerDetailsSchema.parse(payload),
    );
  }

  reinstall() {
    return this.httpClient.request(
      'POST',
      `/client/servers/${this.id}/settings/reinstall`,
    );
  }
}
