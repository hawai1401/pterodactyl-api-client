import type {
  IP,
  ListwithPagination,
  Pagination,
  Tuple,
} from "../../../types.js";
import type { ServerPermissions, Signal } from "../server.types.js";

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

export type TaskAction = "command" | "power" | "backup";

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
  U extends keyof ServerActivityMap ? ServerActivityMap[U] : {};

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
