import { coerce } from 'zod';
export declare const userServerId: import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodUUID]>;
export declare const userServerSubuserId: import("zod").ZodUUID;
export declare const userServerDatabaseId: import("zod").ZodString;
export declare const userServerPort: import("zod").ZodInt;
export declare const userServerBackupId: import("zod").ZodUUID;
export declare const userServerScheduleId: import("zod").ZodInt;
export declare const userServerTaskId: import("zod").ZodInt;
export declare const allocationId: coerce.ZodCoercedNumber<number>;
export declare const state: import("zod").ZodLiteral<"running" | "starting" | "stopping" | "offline">;
export declare const cronString: import("zod").ZodString;
export declare const userServerActivityEvent: import("zod").ZodLiteral<"server:control.console" | "server:control.start" | "server:control.stop" | "server:control.restart" | "server:control.kill" | "server:file.create" | "server:file.read" | "server:file.update" | "server:file.delete" | "server:file.archive" | "server:file.sftp" | "server:backup.create" | "server:backup.read" | "server:backup.delete" | "server:backup.download" | "server:backup.restore" | "server:allocation.read" | "server:allocation.create" | "server:allocation.update" | "server:allocation.delete" | "server:database.read" | "server:database.create" | "server:database.update" | "server:schedule.read" | "server:schedule.create" | "server:schedule.update" | "server:schedule.delete" | "server:database.delete" | "server:user.read" | "server:user.create" | "server:user.update" | "server:user.delete" | "server:startup.read" | "server:startup.update" | "server:admin.websocket.errors" | "server:admin.websocket.install" | "server:admin.websocket.transfer">;
export declare const assignAllocationSchema: import("zod").ZodObject<{
    ip: import("zod").ZodIPv4;
    port: import("zod").ZodInt;
}, import("zod/v4/core").$strip>;
export declare const editAllocationSchema: import("zod").ZodObject<{
    notes: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const userServerCommandSchema: import("zod").ZodObject<{
    command: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const userServerWebsocketSchema: import("zod").ZodObject<{
    onConsoleOutput: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<readonly [import("zod").ZodString], null>, import("zod").ZodUnion<readonly [import("zod").ZodPromise<import("zod").ZodVoid>, import("zod").ZodVoid]>>>;
    onStats: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<readonly [import("zod").ZodObject<{
        cpu_absolute: import("zod").ZodInt;
        disk_bytes: import("zod").ZodInt;
        memory_bytes: import("zod").ZodInt;
        memory_limit_bytes: import("zod").ZodInt;
        network: import("zod").ZodObject<{
            rx_bytes: import("zod").ZodInt;
            tx_bytes: import("zod").ZodInt;
        }, import("zod/v4/core").$strip>;
        state: import("zod").ZodLiteral<"running" | "starting" | "stopping" | "offline">;
        uptime: import("zod").ZodInt;
    }, import("zod/v4/core").$strip>], null>, import("zod").ZodUnion<readonly [import("zod").ZodPromise<import("zod").ZodVoid>, import("zod").ZodVoid]>>>;
    onStatusChange: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<readonly [import("zod").ZodLiteral<"running" | "starting" | "stopping" | "offline">], null>, import("zod").ZodUnion<readonly [import("zod").ZodPromise<import("zod").ZodVoid>, import("zod").ZodVoid]>>>;
}, import("zod/v4/core").$strip>;
export declare const createBackupSchema: import("zod").ZodObject<{
    name: import("zod").ZodOptional<import("zod").ZodString>;
    ignored: import("zod").ZodOptional<import("zod").ZodString>;
    is_locked: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>;
export declare const createScheduleSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    minute: import("zod").ZodString;
    hour: import("zod").ZodString;
    day_of_month: import("zod").ZodString;
    month: import("zod").ZodString;
    day_of_week: import("zod").ZodString;
    is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
    only_when_online: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>;
export declare const createTaskSchema: import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
    action: import("zod").ZodLiteral<"command">;
    payload: import("zod").ZodString;
    time_offset: import("zod").ZodInt;
    continue_on_failure: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    action: import("zod").ZodLiteral<"power">;
    payload: import("zod").ZodLiteral<"stop" | "start" | "restart" | "kill">;
    time_offset: import("zod").ZodInt;
    continue_on_failure: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    action: import("zod").ZodLiteral<"backup">;
    payload: import("zod").ZodOptional<import("zod").ZodString>;
    time_offset: import("zod").ZodInt;
    continue_on_failure: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>], "action">;
export declare const serverPermissionSchema: import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">;
export declare const subuserPermissionSchema: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>;
export declare const createSubuserSchema: import("zod").ZodObject<{
    email: import("zod").ZodString;
    permissions: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>>;
}, import("zod/v4/core").$strip>;
export declare const setSubuserPermissionsSchema: import("zod").ZodObject<{
    permissions: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>>;
}, import("zod/v4/core").$strip>;
export declare const createDatabaseSchema: import("zod").ZodObject<{
    database: import("zod").ZodString;
    remote: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const restoreBackupSchema: import("zod").ZodObject<{
    truncate: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>;
export declare const setEnvironmentVariableSchema: import("zod").ZodObject<{
    key: import("zod").ZodString;
    value: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const setUserServerDetailsSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const editImageSchema: import("zod").ZodObject<{
    docker_image: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=server.schemas.d.ts.map