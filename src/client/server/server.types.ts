import type {
  BaseArgs,
  EnvironmentVariable,
  IP,
  ListwithPagination,
  Tuple,
} from "../../types.js";

export type ServerPermissions =
  | ServerControlPermissions
  | FileManagementPermissions
  | BackupPermissions
  | NetworkAllocationPermissions
  | DatabsePermissions
  | SchedulePermissions
  | UserManagementPermissions
  | StartupPermissions
  | AdminPermissions
  | "*";

export type ServerControlPermissions =
  | "control.console"
  | "control.start"
  | "control.stop"
  | "control.restart"
  | "control.kill";

export type FileManagementPermissions =
  | "file.create"
  | "file.read"
  | "file.update"
  | "file.delete"
  | "file.archive"
  | "file.sftp";

export type BackupPermissions =
  | "backup.create"
  | "backup.read"
  | "backup.delete"
  | "backup.download"
  | "backup.restore";

export type NetworkAllocationPermissions =
  | "allocation.read"
  | "allocation.create"
  | "allocation.update"
  | "allocation.delete";

export type DatabsePermissions =
  | "database.read"
  | "database.create"
  | "database.update"
  | "database.delete";

export type SchedulePermissions =
  | "schedule.read"
  | "schedule.create"
  | "schedule.update"
  | "schedule.delete";

export type UserManagementPermissions =
  | "user.read"
  | "user.create"
  | "user.update"
  | "user.delete";

export type StartupPermissions = "startup.read" | "startup.update";

export type AdminPermissions =
  | "admin.websocket.errors"
  | "admin.websocket.install"
  | "admin.websocket.transfer";

export interface Allocation {
  object: "allocation";
  attributes: {
    id: number;
    ip: IP;
    ip_alias: null | string;
    port: number;
    notes: null | string;
    is_default: boolean;
  };
}

export interface EggVariable {
  object: "egg_variable";
  attributes: {
    name: string;
    description: string;
    env_variable: Uppercase<string>;
    default_value: string;
    server_value: string;
    is_editable: boolean;
    rules: string;
  };
}

export interface UserServerInfoAttributes {
  id: number;
  external_id: string | null;
  uuid: string;
  identifier: string;
  name: string;
  description: string;
  server_owner: boolean;
  status: "installing" | "suspended" | null;
  suspended: boolean;
  limits: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: null | string;
    oom_disabled: boolean;
  };
  feature_limits: {
    databases: number;
    allocations: number;
    backups: number;
  };
  user: number;
  node: number;
  allocation: number;
  nest: number;
  egg: number;
  container: {
    startup_command: string;
    image: string;
    installed: number;
    environment: Record<EnvironmentVariable, string>;
  };
  updated_at: string;
  created_at: string;
}

export interface UserServerAttributes {
  server_owner: boolean;
  identifier: string;
  internal_id: number;
  uuid: string;
  name: string;
  is_node_under_maintenance: boolean;
  description: string;
  status: null;
  is_suspended: boolean;
  is_installing: boolean;
  is_transferring: boolean;
  node: string;
  sftp_details: {
    ip: string;
    port: number;
  };
  invocation: string;
  docker_image: string;
  egg_features: string[];
  feature_limits: {
    databases: number;
    allocations: number;
    backups: number;
  };
  user_permissions: ServerPermissions[];
  limits: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
    threads: null | string;
    oom_disabled: boolean;
  };
  relationships: {
    allocations: {
      object: "list";
      data: Allocation[];
    };
    variables: {
      object: "list";
      data: EggVariable[];
    };
  };
}

export interface UserServerAttributesWithDate<
  T extends string | Date,
> extends UserServerAttributes {
  updated_at: T;
  created_at: T;
}

export interface UserServer<
  T extends UserServerAttributes | UserServerAttributesWithDate<string> | UserServerInfoAttributes,
> {
  object: "server";
  attributes: T;
}

export interface ServerInfo extends UserServer<UserServerAttributes> {
  meta: {
    is_server_owner: boolean;
    user_permissions: ServerPermissions[];
  };
}

export interface UserServerList<
  T extends UserServerAttributes | UserServerAttributesWithDate<string>,
> extends ListwithPagination {
  data: UserServer<T>[];
}

export type State = "running" | "starting" | "stopping" | "offline";

export type Signal = "start" | "stop" | "restart" | "kill";

export interface EditServerArgs extends BaseArgs {
  name: string;
  description?: string | undefined;
}

export type TaskAction = "command" | "power" | "backup";

export type ServerFileEvent =
  | "server:file.read"
  | "server:file.download"
  | "server:file.write"
  | "server:file.copy"
  | "server:file.rename"
  | "server:file.compress"
  | "server:file.decompress"
  | "server:file.delete"
  | "server:file.create-directory"
  | "server:file.pull";

export type ServerConsoleEvent = "server:console.command";

export type ServerSettingsEvent =
  | "server:settings.rename"
  | "server:settings.description";

export type ServerReinstallEvent = "server:reinstall";

export type ServerStartupEvent = "server:startup.image" | "server:startup.edit";

export type ServerDatabaseEvent =
  | "server:database.create"
  | "server:database.rotate-password"
  | "server:database.delete";

export type ServerScheduleEvent =
  | "server:schedule.create"
  | "server:schedule.update"
  | "server:schedule.execute"
  | "server:schedule.delete";

export type ServerSubuserEvent =
  | "server:subuser.create"
  | "server:subuser.update"
  | "server:subuser.delete";

export type ServerAllocationEvent =
  | "server:allocation.notes"
  | "server:allocation.primary"
  | "server:allocation.create"
  | "server:allocation.delete";

export type ServerTaskEvent =
  | "server:task.create"
  | "server:task.update"
  | "server:task.delete";

export type ServerBackupEvent =
  | "server:backup.start"
  | "server:backup.unlock"
  | "server:backup.lock"
  | "server:backup.delete"
  | "server:backup.download"
  | "server:backup.restore"
  | "server:backup.restore-complete";

export type ServerEvent =
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
  | ServerBackupEvent;

export interface OldNew {
  old: string;
  new: string;
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
  payload: T extends "power" ? Signal : string;
}

export type AllocationType = `${IP}:${number}`;

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
  "server:file.read": FileSingle;
  "server:file.download": FileSingle;
  "server:file.write": FileSingle;
  "server:file.copy": FileSingle;

  "server:file.rename": FileRename;

  "server:file.compress": FileBatch;
  "server:file.delete": FileBatch;

  "server:file.decompress": {
    directory: string;
    files: string;
  };

  "server:file.create-directory": {
    name: string;
    directory: string;
  };
  "server:file.pull": {
    directory: string;
    url: string;
  };

  /* CONSOLE */
  "server:console.command": {
    command: string;
  };

  /* SETTINGS */
  "server:settings.rename": OldNew;
  "server:settings.description": OldNew;

  /* STARTUP */
  "server:startup.image": OldNew;

  "server:startup.edit": {
    variable: string;
  } & OldNew;

  /* DATABASE */
  "server:database.create": NameOnly;
  "server:database.rotate-password": NameOnly;
  "server:database.delete": NameOnly;

  /* SCHEDULE */
  "server:schedule.create": NameOnly;

  "server:schedule.update": {
    name: string;
    active: boolean;
  };

  "server:schedule.execute": NameOnly;
  "server:schedule.delete": NameOnly;

  /* SUBUSER */
  "server:subuser.create": EmailPerms;

  "server:subuser.update": PermissionsUpdate;

  "server:subuser.delete": EmailRevoked;

  /* ALLOCATION */
  "server:allocation.notes": {
    old: null | string;
    new: null | string;
  } & AllocationInterface;

  "server:allocation.primary": AllocationInterface;
  "server:allocation.create": AllocationInterface;
  "server:allocation.delete": AllocationInterface;

  /* TASK */
  "server:task.create": TaskPayload;
  "server:task.update": TaskPayload;
  "server:task.delete": NameOnly;

  /* BACKUP */
  "server:backup.start": NameLocked;

  "server:backup.unlock": NameOnly;
  "server:backup.lock": NameOnly;

  "server:backup.delete": NameFailed;

  "server:backup.download": NameOnly;

  "server:backup.restore": {
    name: string;
    truncate: boolean;
  };
  "server:backup.restore-complete": NameOnly;
};

export type ServerActivityProperties<U extends ServerEvent> =
  U extends keyof ServerActivityMap ? ServerActivityMap[U] : never;

export interface ActivityLog<
  T extends string | Date,
  U extends ServerEvent = ServerEvent,
> {
  object: "activity_log";
  attributes: {
    id: string;
    batch: null;
    event: U;
    is_api: boolean;
    ip: IP;
    description: string;
    properties: ServerActivityProperties<U>;
    has_additional_metadata: boolean;
    timestamp: T;
  };
}

export interface ServerActivityList<
  T extends string | Date,
  U extends ServerEvent = ServerEvent,
> extends ListwithPagination {
  data: ActivityLog<T, U>[];
}
