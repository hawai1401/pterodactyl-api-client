import z from "zod";
export declare const userServerId: z.ZodUnion<readonly [z.ZodString, z.ZodUUID]>;
export declare const userServerSubuserId: z.ZodUUID;
export declare const userServerDatabaseId: z.ZodString;
export declare const userServerPort: z.ZodInt;
export declare const userServerBackupId: z.ZodUUID;
export declare const userServerScheduleId: z.ZodInt;
export declare const userServerScheduleTaskId: z.ZodInt;
export declare const allocationId: z.z.ZodCoercedNumber<number>;
export declare const state: z.ZodLiteral<"running" | "starting" | "stopping" | "offline">;
export declare const cronString: z.ZodString;
export declare const userServerActivityEvent: z.ZodLiteral<"server:file.read" | "server:file.delete" | "server:database.create" | "server:database.delete" | "server:schedule.create" | "server:schedule.update" | "server:schedule.delete" | "server:allocation.create" | "server:allocation.delete" | "server:backup.delete" | "server:backup.download" | "server:backup.restore" | "server:control.console" | "server:control.start" | "server:control.stop" | "server:control.restart" | "server:control.kill" | "server:file.create" | "server:file.update" | "server:file.archive" | "server:file.sftp" | "server:backup.create" | "server:backup.read" | "server:allocation.read" | "server:allocation.update" | "server:database.read" | "server:database.update" | "server:schedule.read" | "server:user.read" | "server:user.create" | "server:user.update" | "server:user.delete" | "server:startup.read" | "server:startup.update" | "server:admin.websocket.errors" | "server:admin.websocket.install" | "server:admin.websocket.transfer">;
export declare const assignAllocationSchema: z.ZodObject<{
    ip: z.ZodIPv4;
    port: z.ZodInt;
}, z.z.core.$strip>;
export declare const editAllocationSchema: z.ZodObject<{
    notes: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const userServerCommandSchema: z.ZodObject<{
    command: z.ZodString;
}, z.z.core.$strip>;
export declare const userServerWebsocketSchema: z.ZodObject<{
    onConsoleOutput: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodString], null>, z.ZodUnion<readonly [z.ZodPromise<z.ZodVoid>, z.ZodVoid]>>>;
    onStats: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodObject<{
        cpu_absolute: z.ZodInt;
        disk_bytes: z.ZodInt;
        memory_bytes: z.ZodInt;
        memory_limit_bytes: z.ZodInt;
        network: z.ZodObject<{
            rx_bytes: z.ZodInt;
            tx_bytes: z.ZodInt;
        }, z.z.core.$strip>;
        state: z.ZodLiteral<"running" | "starting" | "stopping" | "offline">;
        uptime: z.ZodInt;
    }, z.z.core.$strip>], null>, z.ZodUnion<readonly [z.ZodPromise<z.ZodVoid>, z.ZodVoid]>>>;
    onStatusChange: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodLiteral<"running" | "starting" | "stopping" | "offline">], null>, z.ZodUnion<readonly [z.ZodPromise<z.ZodVoid>, z.ZodVoid]>>>;
}, z.z.core.$strip>;
export declare const createBackupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    ignored: z.ZodOptional<z.ZodString>;
    is_locked: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const createScheduleSchema: z.ZodObject<{
    name: z.ZodString;
    minute: z.ZodString;
    hour: z.ZodString;
    day_of_month: z.ZodString;
    month: z.ZodString;
    day_of_week: z.ZodString;
    is_active: z.ZodOptional<z.ZodBoolean>;
    only_when_online: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const createTaskSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    action: z.ZodLiteral<"command">;
    payload: z.ZodString;
    time_offset: z.ZodInt;
    continue_on_failure: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<"power">;
    payload: z.ZodLiteral<"start" | "stop" | "restart" | "kill">;
    time_offset: z.ZodInt;
    continue_on_failure: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>, z.ZodObject<{
    action: z.ZodLiteral<"backup">;
    payload: z.ZodOptional<z.ZodString>;
    time_offset: z.ZodInt;
    continue_on_failure: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>], "action">;
export declare const serverPermissionSchema: z.ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">;
export declare const subuserPermissionSchema: z.ZodUnion<readonly [z.ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, z.ZodLiteral<"*">]>;
export declare const createSubuserSchema: z.ZodObject<{
    email: z.ZodString;
    permissions: z.ZodArray<z.ZodUnion<readonly [z.ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, z.ZodLiteral<"*">]>>;
}, z.z.core.$strip>;
export declare const editSubuserSchema: z.ZodObject<{
    permissions: z.ZodArray<z.ZodUnion<readonly [z.ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer">, z.ZodLiteral<"*">]>>;
}, z.z.core.$strip>;
export declare const createDatabaseSchema: z.ZodObject<{
    database: z.ZodString;
    remote: z.ZodString;
}, z.z.core.$strip>;
export declare const restoreBackupSchema: z.ZodObject<{
    truncate: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const editVariableSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.z.core.$strip>;
export declare const renameServerSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const editImageSchema: z.ZodObject<{
    docker_image: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=server.schemas.d.ts.map