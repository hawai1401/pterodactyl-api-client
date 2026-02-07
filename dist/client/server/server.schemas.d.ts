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
export declare const userServerActivityPaginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    sort: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodOptional<z.ZodLiteral<"ascending" | "descending">>;
    }, z.z.core.$strip>>;
    event: z.ZodOptional<z.ZodLiteral<"control.console" | "control.start" | "control.stop" | "control.restart" | "control.kill" | "file.create" | "file.read" | "file.update" | "file.delete" | "file.archive" | "file.sftp" | "backup.create" | "backup.read" | "backup.delete" | "backup.download" | "backup.restore" | "allocation.read" | "allocation.create" | "allocation.update" | "allocation.delete" | "database.read" | "database.create" | "database.update" | "database.delete" | "schedule.read" | "schedule.create" | "schedule.update" | "schedule.delete" | "user.read" | "user.create" | "user.update" | "user.delete" | "startup.read" | "startup.update" | "admin.websocket.errors" | "admin.websocket.install" | "admin.websocket.transfer" | "*">>;
}, z.z.core.$strip>;
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
export declare const serverPermissionSchema: z.ZodEnum<{
    "control.console": "control.console";
    "control.start": "control.start";
    "control.stop": "control.stop";
    "control.restart": "control.restart";
    "control.kill": "control.kill";
    "file.create": "file.create";
    "file.read": "file.read";
    "file.update": "file.update";
    "file.delete": "file.delete";
    "file.archive": "file.archive";
    "file.sftp": "file.sftp";
    "backup.create": "backup.create";
    "backup.read": "backup.read";
    "backup.delete": "backup.delete";
    "backup.download": "backup.download";
    "backup.restore": "backup.restore";
    "allocation.read": "allocation.read";
    "allocation.create": "allocation.create";
    "allocation.update": "allocation.update";
    "allocation.delete": "allocation.delete";
    "database.read": "database.read";
    "database.create": "database.create";
    "database.update": "database.update";
    "database.delete": "database.delete";
    "schedule.read": "schedule.read";
    "schedule.create": "schedule.create";
    "schedule.update": "schedule.update";
    "schedule.delete": "schedule.delete";
    "user.read": "user.read";
    "user.create": "user.create";
    "user.update": "user.update";
    "user.delete": "user.delete";
    "startup.read": "startup.read";
    "startup.update": "startup.update";
    "admin.websocket.errors": "admin.websocket.errors";
    "admin.websocket.install": "admin.websocket.install";
    "admin.websocket.transfer": "admin.websocket.transfer";
}>;
export declare const subuserPermissionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    "control.console": "control.console";
    "control.start": "control.start";
    "control.stop": "control.stop";
    "control.restart": "control.restart";
    "control.kill": "control.kill";
    "file.create": "file.create";
    "file.read": "file.read";
    "file.update": "file.update";
    "file.delete": "file.delete";
    "file.archive": "file.archive";
    "file.sftp": "file.sftp";
    "backup.create": "backup.create";
    "backup.read": "backup.read";
    "backup.delete": "backup.delete";
    "backup.download": "backup.download";
    "backup.restore": "backup.restore";
    "allocation.read": "allocation.read";
    "allocation.create": "allocation.create";
    "allocation.update": "allocation.update";
    "allocation.delete": "allocation.delete";
    "database.read": "database.read";
    "database.create": "database.create";
    "database.update": "database.update";
    "database.delete": "database.delete";
    "schedule.read": "schedule.read";
    "schedule.create": "schedule.create";
    "schedule.update": "schedule.update";
    "schedule.delete": "schedule.delete";
    "user.read": "user.read";
    "user.create": "user.create";
    "user.update": "user.update";
    "user.delete": "user.delete";
    "startup.read": "startup.read";
    "startup.update": "startup.update";
    "admin.websocket.errors": "admin.websocket.errors";
    "admin.websocket.install": "admin.websocket.install";
    "admin.websocket.transfer": "admin.websocket.transfer";
}>, z.ZodLiteral<"*">]>;
export declare const createSubuserSchema: z.ZodObject<{
    email: z.ZodString;
    permissions: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        "control.console": "control.console";
        "control.start": "control.start";
        "control.stop": "control.stop";
        "control.restart": "control.restart";
        "control.kill": "control.kill";
        "file.create": "file.create";
        "file.read": "file.read";
        "file.update": "file.update";
        "file.delete": "file.delete";
        "file.archive": "file.archive";
        "file.sftp": "file.sftp";
        "backup.create": "backup.create";
        "backup.read": "backup.read";
        "backup.delete": "backup.delete";
        "backup.download": "backup.download";
        "backup.restore": "backup.restore";
        "allocation.read": "allocation.read";
        "allocation.create": "allocation.create";
        "allocation.update": "allocation.update";
        "allocation.delete": "allocation.delete";
        "database.read": "database.read";
        "database.create": "database.create";
        "database.update": "database.update";
        "database.delete": "database.delete";
        "schedule.read": "schedule.read";
        "schedule.create": "schedule.create";
        "schedule.update": "schedule.update";
        "schedule.delete": "schedule.delete";
        "user.read": "user.read";
        "user.create": "user.create";
        "user.update": "user.update";
        "user.delete": "user.delete";
        "startup.read": "startup.read";
        "startup.update": "startup.update";
        "admin.websocket.errors": "admin.websocket.errors";
        "admin.websocket.install": "admin.websocket.install";
        "admin.websocket.transfer": "admin.websocket.transfer";
    }>, z.ZodLiteral<"*">]>>;
}, z.z.core.$strip>;
export declare const editSubuserSchema: z.ZodObject<{
    permissions: z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        "control.console": "control.console";
        "control.start": "control.start";
        "control.stop": "control.stop";
        "control.restart": "control.restart";
        "control.kill": "control.kill";
        "file.create": "file.create";
        "file.read": "file.read";
        "file.update": "file.update";
        "file.delete": "file.delete";
        "file.archive": "file.archive";
        "file.sftp": "file.sftp";
        "backup.create": "backup.create";
        "backup.read": "backup.read";
        "backup.delete": "backup.delete";
        "backup.download": "backup.download";
        "backup.restore": "backup.restore";
        "allocation.read": "allocation.read";
        "allocation.create": "allocation.create";
        "allocation.update": "allocation.update";
        "allocation.delete": "allocation.delete";
        "database.read": "database.read";
        "database.create": "database.create";
        "database.update": "database.update";
        "database.delete": "database.delete";
        "schedule.read": "schedule.read";
        "schedule.create": "schedule.create";
        "schedule.update": "schedule.update";
        "schedule.delete": "schedule.delete";
        "user.read": "user.read";
        "user.create": "user.create";
        "user.update": "user.update";
        "user.delete": "user.delete";
        "startup.read": "startup.read";
        "startup.update": "startup.update";
        "admin.websocket.errors": "admin.websocket.errors";
        "admin.websocket.install": "admin.websocket.install";
        "admin.websocket.transfer": "admin.websocket.transfer";
    }>, z.ZodLiteral<"*">]>>;
}, z.z.core.$strip>;
export declare const createDatabaseSchema: z.ZodObject<{
    database: z.ZodString;
    remote: z.ZodString;
}, z.z.core.$strip>;
export declare const restoreBackupSchema: z.ZodObject<{
    truncate: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const serverListSchema: z.ZodOptional<z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    sort: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodOptional<z.ZodLiteral<"ascending" | "descending">>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>>;
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