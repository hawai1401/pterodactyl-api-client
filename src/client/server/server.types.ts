import type {
  BasePayload,
  IPv4,
  ObjectList,
  ObjectListWithPagination,
  PaginationFetchOptions,
  Sort,
  Tuple,
} from '../../types.js';
import type { CamelCasedProperties } from '../../utils/camelCase.js';
import type { CreateDelete } from '../account/index.js';
import type { AllocationObject } from './allocations/allocations.types.js';
import type { EggVariableObjectList } from './startup/startup.types.js';

export type CreateUpdateDelete = CreateDelete | 'update';
export type CreateReadUpdateDelete = CreateUpdateDelete | 'read';

export type ServerControlPermissions =
  `control.${'console' | 'start' | 'stop' | 'restart' | 'kill'}`;

export type FileManagementPermissions =
  `file.${CreateUpdateDelete | 'read' | 'archive' | 'sftp'}`;

export type BackupPermissions =
  `backup.${CreateDelete | 'read' | 'download' | 'restore'}`;

export type NetworkAllocationPermissions =
  `allocation.${CreateReadUpdateDelete}`;

export type DatabasePermissions = `database.${CreateReadUpdateDelete}`;

export type SchedulePermissions = `schedule.${CreateReadUpdateDelete}`;

export type UserManagementPermissions = `user.${CreateReadUpdateDelete}`;

export type StartupPermissions = `startup.${'read' | 'update'}`;

export type AdminPermissions =
  `admin.websocket.${'errors' | 'install' | 'transfer'}`;

export type ServerPermissions =
  | ServerControlPermissions
  | FileManagementPermissions
  | BackupPermissions
  | NetworkAllocationPermissions
  | DatabasePermissions
  | SchedulePermissions
  | UserManagementPermissions
  | StartupPermissions
  | AdminPermissions
  | '*';

export interface FetchUserServerActivityLogsOptions<
  Event extends ServerEvent,
> extends PaginationFetchOptions {
  filter?: {
    event?: Event | undefined;
  };
  sort?: {
    timestamp?: Sort | undefined;
  };
}

export interface BaseUserServer {
  object: 'server';
  attributes: {
    server_owner: boolean;
    identifier: string;
    server_identifier: string;
    internal_id: number;
    uuid: string;
    name: string;
    node: string;
    is_node_under_maintenance: boolean;
    sftp_details: {
      ip: string;
      port: number;
    };
    description: string;
    limits: {
      memory: number;
      swap: number;
      disk: number;
      io: number;
      cpu: number;
      threads: null | string;
      oom_disabled: boolean;
    };
    invocation: string;
    docker_image: string;
    egg_features: string[];
    feature_limits: {
      databases: number;
      allocations: number;
      backups: number;
    };
    is_transferring: boolean;
    relationships: {
      allocations: ObjectList<AllocationObject>;
      variables: EggVariableObjectList;
    };
  };
}

export type UserServer = BaseUserServer &
  (
    | {
        attributes: {
          status: null;
          is_installing: false;
          is_suspended: false;
        };
      }
    | {
        attributes: {
          status: 'installing';
          is_installing: true;
          is_suspended: false;
        };
      }
    | {
        attributes: {
          status: 'suspended';
          is_installing: false;
          is_suspended: true;
        };
      }
  );

export type UserServerWithDetails = UserServer & {
  meta: {
    is_server_owner: boolean;
    user_permissions: ServerPermissions[];
  };
};

export interface UserServerList extends ObjectListWithPagination<UserServer> {
  data: UserServer[];
}

export type State = 'running' | 'starting' | 'stopping' | 'offline';

export type Signal = 'start' | 'stop' | 'restart' | 'kill';

export interface SetUserServerDetailsPayload extends BasePayload {
  name: string;
  description?: string | undefined;
}

export type TaskAction = 'command' | 'power' | 'backup';

export type ServerFileEvent =
  `file.${'read' | 'download' | 'write' | 'copy' | 'rename' | 'compress' | 'decompress' | 'delete' | 'create-directory' | 'pull'}`;

export type ServerConsoleEvent = 'console.command';

export type ServerSettingsEvent = `settings.${'rename' | 'description'}`;

export type ServerReinstallEvent = 'reinstall';

export type ServerStartupEvent = `startup.${'image' | 'edit'}`;

export type ServerDatabaseEvent =
  `database.${CreateDelete | 'rotate-password'}`;

export type ServerScheduleEvent = `schedule.${CreateUpdateDelete | 'execute'}`;

export type ServerSubuserEvent = `subuser.${CreateUpdateDelete}`;

export type ServerAllocationEvent =
  `allocation.${CreateDelete | 'notes' | 'primary'}`;

export type ServerTaskEvent = `task.${CreateUpdateDelete}`;

export type ServerBackupEvent =
  `backup.${'start' | 'unlock' | 'lock' | 'delete' | 'download' | 'restore' | 'restore-complete'}`;

export type ServerEvent = `server:${
  | ServerFileEvent
  | ServerConsoleEvent
  | ServerSettingsEvent
  | ServerReinstallEvent
  | ServerStartupEvent
  | ServerDatabaseEvent
  | ServerScheduleEvent
  | ServerSubuserEvent
  | ServerAllocationEvent
  | ServerTaskEvent
  | ServerBackupEvent}`;

export interface OldNew<T extends string | null = string> {
  old: T;
  new: T;
}

export interface NameOnly {
  name: string;
}

export interface NameLocked extends NameOnly {
  locked: boolean;
}

export interface NameFailed extends NameOnly {
  failed: boolean;
}

export interface EmailPerms<N extends number = number> {
  email: string;
  permissions: Tuple<ServerPermissions, N>;
  count: N;
}

export interface PermissionsUpdate<
  O extends number = number,
  N extends number = number,
> {
  email: string;
  old: Tuple<ServerPermissions, O>;
  old_count: O;
  new: Tuple<ServerPermissions, N>;
  new_count: N;
  revoked: boolean;
}

export interface EmailRevoked {
  email: string;
  revoked: boolean;
}

export interface TaskPayload<
  T extends TaskAction = TaskAction,
> extends NameOnly {
  action: T;
  payload: T extends 'power' ? Signal : string;
}

export type AllocationType = `${IPv4}:${number}`;

export interface AllocationInterface {
  allocation: AllocationType;
}

export interface FileSingle {
  file: string;
}

export interface FileBatch<N extends number = number> {
  directory: string;
  files: Tuple<string, N>;
  count: N;
}

export interface FileRename<N extends number = number> {
  directory: string;
  files: Tuple<
    {
      from: string;
      to: string;
    },
    N
  >;
  count: N;
}

export type ServerActivityMap = {
  /* FILE */
  'server:file.read': FileSingle;
  'server:file.download': FileSingle;
  'server:file.write': FileSingle;
  'server:file.copy': FileSingle;

  'server:file.rename': FileRename;

  'server:file.compress': FileBatch;
  'server:file.delete': FileBatch;

  'server:file.decompress': {
    directory: string;
    files: string;
  };

  'server:file.create-directory': {
    directory: string;
  } & NameOnly;
  'server:file.pull': {
    directory: string;
    url: string;
  };

  /* CONSOLE */
  'server:console.command': {
    command: string;
  };

  /* SETTINGS */
  'server:settings.rename': OldNew;
  'server:settings.description': OldNew;

  /* STARTUP */
  'server:startup.image': OldNew;

  'server:startup.edit': {
    variable: string;
  } & OldNew;

  /* DATABASE */
  'server:database.create': NameOnly;
  'server:database.rotate-password': NameOnly;
  'server:database.delete': NameOnly;

  /* SCHEDULE */
  'server:schedule.create': NameOnly;

  'server:schedule.update': {
    active: boolean;
  } & NameOnly;

  'server:schedule.execute': NameOnly;
  'server:schedule.delete': NameOnly;

  /* SUBUSER */
  'server:subuser.create': EmailPerms;

  'server:subuser.update': PermissionsUpdate;

  'server:subuser.delete': EmailRevoked;

  /* ALLOCATION */
  'server:allocation.notes': OldNew<string | null> & AllocationInterface;

  'server:allocation.primary': AllocationInterface;
  'server:allocation.create': AllocationInterface;
  'server:allocation.delete': AllocationInterface;

  /* TASK */
  'server:task.create': TaskPayload;
  'server:task.update': TaskPayload;
  'server:task.delete': NameOnly;

  /* BACKUP */
  'server:backup.start': NameLocked;

  'server:backup.unlock': NameOnly;
  'server:backup.lock': NameOnly;

  'server:backup.delete': NameFailed;

  'server:backup.download': NameOnly;

  'server:backup.restore': {
    truncate: boolean;
  } & NameOnly;
  'server:backup.restore-complete': NameOnly;
};

export type ServerActivityProperties<U extends ServerEvent> =
  U extends keyof ServerActivityMap ? ServerActivityMap[U] : never;

export interface ActivityLogObject<Event extends ServerEvent = ServerEvent> {
  object: 'activity_log';
  attributes: {
    id: string;
    batch: null;
    event: Event;
    is_api: boolean;
    ip: IPv4;
    description: string;
    properties: ServerActivityProperties<Event>;
    has_additional_metadata: boolean;
    timestamp: Date;
  };
}
export interface ActivityLog<Event extends ServerEvent = ServerEvent> {
  id: string;
  batch: null;
  event: Event extends object ? CamelCasedProperties<Event> : Event;
  isApi: boolean;
  ip: `${number}.${number}.${number}.${number}`;
  description: string;
  properties: ServerActivityProperties<Event> extends object
    ? CamelCasedProperties<ServerActivityProperties<Event>>
    : ServerActivityProperties<Event>;
  hasAdditionalMetadata: boolean;
  timestamp: Date;
}
