import z from "zod";
import { uuidSchema } from "../../schemas.js";
export const userServerId = z.union([z.string().length(8), uuidSchema]);
export const userServerSubuserId = uuidSchema;
export const userServerDatabaseId = z.string().length(8);
export const userServerPort = z.int().positive().min(1024).max(65535);
export const userServerBackupId = uuidSchema;
export const userServerScheduleId = z.int().positive();
export const userServerScheduleTaskId = z.int().positive();
export const allocationId = z.coerce.number();
export const state = z.literal(["running", "starting", "stopping", "offline"]);
export const cronString = z.string().regex(/^(?:\*|\d+|\*\/\d+)$/);
export const userServerActivityEvent = z.literal([
    "server:control.console",
    "server:control.start",
    "server:control.stop",
    "server:control.restart",
    "server:control.kill",
    "server:file.create",
    "server:file.read",
    "server:file.update",
    "server:file.delete",
    "server:file.archive",
    "server:file.sftp",
    "server:backup.create",
    "server:backup.read",
    "server:backup.delete",
    "server:backup.download",
    "server:backup.restore",
    "server:allocation.read",
    "server:allocation.create",
    "server:allocation.update",
    "server:allocation.delete",
    "server:database.read",
    "server:database.create",
    "server:database.update",
    "server:schedule.read",
    "server:schedule.create",
    "server:schedule.update",
    "server:schedule.delete",
    "server:database.delete",
    "server:user.read",
    "server:user.create",
    "server:user.update",
    "server:user.delete",
    "server:startup.read",
    "server:startup.update",
    "server:admin.websocket.errors",
    "server:admin.websocket.install",
    "server:admin.websocket.transfer",
]);
export const assignAllocationSchema = z.object({
    ip: z.ipv4(),
    port: userServerPort,
});
export const editAllocationSchema = z.object({
    notes: z.string().min(1).max(255).optional(),
});
export const userServerCommandSchema = z.object({
    command: z.string(),
});
export const userServerWebsocketSchema = z.object({
    onConsoleOutput: z
        .function({
        input: [z.string()],
        output: z.union([z.promise(z.void()), z.void()]),
    })
        .optional(),
    onStats: z
        .function({
        input: [
            z.object({
                cpu_absolute: z.int().positive(),
                disk_bytes: z.int().positive(),
                memory_bytes: z.int().positive(),
                memory_limit_bytes: z.int().positive(),
                network: z.object({
                    rx_bytes: z.int().positive(),
                    tx_bytes: z.int().positive(),
                }),
                state: state,
                uptime: z.int().positive(),
            }),
        ],
        output: z.union([z.promise(z.void()), z.void()]),
    })
        .optional(),
    onStatusChange: z
        .function({
        input: [state],
        output: z.union([z.promise(z.void()), z.void()]),
    })
        .optional(),
});
export const createBackupSchema = z.object({
    name: z.string().max(195).optional(),
    ignored: z.string().optional(),
    is_locked: z.boolean().optional(),
});
export const createScheduleSchema = z.object({
    name: z.string(),
    minute: cronString,
    hour: cronString,
    day_of_month: cronString,
    month: cronString,
    day_of_week: cronString,
    is_active: z.boolean().optional(),
    only_when_online: z.boolean().optional(),
});
export const createTaskSchema = z.discriminatedUnion("action", [
    z.object({
        action: z.literal("command"),
        payload: z.string(),
        time_offset: z.int().positive().min(0).max(900),
        continue_on_failure: z.boolean().optional(),
    }),
    z.object({
        action: z.literal("power"),
        payload: z.literal(["start", "stop", "restart", "kill"]),
        time_offset: z.int().positive().min(0).max(900),
        continue_on_failure: z.boolean().optional(),
    }),
    z.object({
        action: z.literal("backup"),
        payload: z.string().optional(),
        time_offset: z.int().positive().min(0).max(900),
        continue_on_failure: z.boolean().optional(),
    }),
]);
export const serverPermissionSchema = z.literal([
    "control.console",
    "control.start",
    "control.stop",
    "control.restart",
    "control.kill",
    "file.create",
    "file.read",
    "file.update",
    "file.delete",
    "file.archive",
    "file.sftp",
    "backup.create",
    "backup.read",
    "backup.delete",
    "backup.download",
    "backup.restore",
    "allocation.read",
    "allocation.create",
    "allocation.update",
    "allocation.delete",
    "database.read",
    "database.create",
    "database.update",
    "database.delete",
    "schedule.read",
    "schedule.create",
    "schedule.update",
    "schedule.delete",
    "user.read",
    "user.create",
    "user.update",
    "user.delete",
    "startup.read",
    "startup.update",
    "admin.websocket.errors",
    "admin.websocket.install",
    "admin.websocket.transfer",
]);
export const subuserPermissionSchema = z.union([
    serverPermissionSchema,
    z.literal("*"),
]);
export const createSubuserSchema = z.object({
    email: z.string().email().min(1).max(191),
    permissions: subuserPermissionSchema.array(),
});
export const editSubuserSchema = z.object({
    permissions: subuserPermissionSchema.array(),
});
export const createDatabaseSchema = z.object({
    database: z.string().min(1).max(48),
    remote: z.string(),
});
export const restoreBackupSchema = z.object({
    truncate: z.boolean().optional(),
});
export const editVariableSchema = z.object({
    key: z.string(),
    value: z.string(),
});
export const renameServerSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().max(500).optional(),
});
export const editImageSchema = z.object({
    docker_image: z
        .string()
        .max(191)
        .regex(/^[\w#\.\/\- ]*\|?~?[\w\.\/\-:@ ]*$/),
});
