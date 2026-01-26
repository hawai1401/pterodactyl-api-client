import type { BaseArgs, IP, ListwithPagination } from "../../types.js";

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
  T extends UserServerAttributes | UserServerAttributesWithDate<string>,
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
