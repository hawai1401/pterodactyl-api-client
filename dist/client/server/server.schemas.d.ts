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
export declare const userServerActivityEvent: import("zod").ZodLiteral<"server:file.delete" | "server:file.read" | "server:backup.delete" | "server:backup.download" | "server:backup.restore" | "server:allocation.delete" | "server:allocation.create" | "server:database.delete" | "server:database.create" | "server:schedule.update" | "server:schedule.delete" | "server:schedule.create" | "server:file.download" | "server:file.write" | "server:file.copy" | "server:file.rename" | "server:file.compress" | "server:file.decompress" | "server:file.create-directory" | "server:file.pull" | "server:console.command" | "server:settings.description" | "server:settings.rename" | "server:reinstall" | "server:startup.image" | "server:startup.edit" | "server:database.rotate-password" | "server:schedule.execute" | "server:subuser.update" | "server:subuser.delete" | "server:subuser.create" | "server:allocation.notes" | "server:allocation.primary" | "server:task.update" | "server:task.delete" | "server:task.create" | "server:backup.start" | "server:backup.unlock" | "server:backup.lock" | "server:backup.restore-complete" | "server:power.start" | "server:power.stop" | "server:power.restart" | "server:power.kill">;
export declare const assignAllocationSchema: import("zod").ZodObject<{
    ip: import("zod").ZodIPv4;
    port: import("zod").ZodInt;
}, import("zod/v4/core").$strip>;
export declare const updateAllocationSchema: import("zod").ZodObject<{
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
    payload: import("zod").ZodLiteral<"start" | "stop" | "restart" | "kill">;
    time_offset: import("zod").ZodInt;
    continue_on_failure: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>, import("zod").ZodObject<{
    action: import("zod").ZodLiteral<"backup">;
    payload: import("zod").ZodOptional<import("zod").ZodString>;
    time_offset: import("zod").ZodInt;
    continue_on_failure: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>], "action">;
export declare const serverPermissionSchema: import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.update" | "file.delete" | "file.create" | "file.read" | "file.archive" | "file.sftp" | "backup.delete" | "backup.create" | "backup.read" | "backup.download" | "backup.restore" | "allocation.update" | "allocation.delete" | "allocation.create" | "allocation.read" | "database.update" | "database.delete" | "database.create" | "database.read" | "schedule.update" | "schedule.delete" | "schedule.create" | "schedule.read" | "user.update" | "user.delete" | "user.create" | "user.read" | "startup.update" | "startup.read" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">;
export declare const subuserPermissionSchema: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.update" | "file.delete" | "file.create" | "file.read" | "file.archive" | "file.sftp" | "backup.delete" | "backup.create" | "backup.read" | "backup.download" | "backup.restore" | "allocation.update" | "allocation.delete" | "allocation.create" | "allocation.read" | "database.update" | "database.delete" | "database.create" | "database.read" | "schedule.update" | "schedule.delete" | "schedule.create" | "schedule.read" | "user.update" | "user.delete" | "user.create" | "user.read" | "startup.update" | "startup.read" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>;
export declare const createSubuserSchema: import("zod").ZodObject<{
    email: import("zod").ZodString;
    permissions: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.update" | "file.delete" | "file.create" | "file.read" | "file.archive" | "file.sftp" | "backup.delete" | "backup.create" | "backup.read" | "backup.download" | "backup.restore" | "allocation.update" | "allocation.delete" | "allocation.create" | "allocation.read" | "database.update" | "database.delete" | "database.create" | "database.read" | "schedule.update" | "schedule.delete" | "schedule.create" | "schedule.read" | "user.update" | "user.delete" | "user.create" | "user.read" | "startup.update" | "startup.read" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>>;
}, import("zod/v4/core").$strip>;
export declare const setSubuserPermissionsSchema: import("zod").ZodObject<{
    permissions: import("zod").ZodArray<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.update" | "file.delete" | "file.create" | "file.read" | "file.archive" | "file.sftp" | "backup.delete" | "backup.create" | "backup.read" | "backup.download" | "backup.restore" | "allocation.update" | "allocation.delete" | "allocation.create" | "allocation.read" | "database.update" | "database.delete" | "database.create" | "database.read" | "schedule.update" | "schedule.delete" | "schedule.create" | "schedule.read" | "user.update" | "user.delete" | "user.create" | "user.read" | "startup.update" | "startup.read" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, import("zod").ZodLiteral<"*">]>>;
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
export declare const setImageSchema: import("zod").ZodObject<{
    docker_image: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=server.schemas.d.ts.map