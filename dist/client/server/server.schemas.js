import { boolean, coerce, discriminatedUnion, int, ipv4, literal, object, promise, string, union, void as zVoid, function as zFunction, } from 'zod';
import { uuidSchema } from '../../schemas.js';
export const userServerId = union([string().length(8), uuidSchema]);
export const userServerSubuserId = uuidSchema;
export const userServerDatabaseId = string().length(8);
export const userServerPort = int().positive().min(1024).max(65535);
export const userServerBackupId = uuidSchema;
export const userServerScheduleId = int().positive();
export const userServerTaskId = int().positive();
export const allocationId = coerce.number();
export const state = literal(['running', 'starting', 'stopping', 'offline']);
export const cronString = string().regex(/^(?:\*|\d+|\*\/\d+)$/);
export const userServerActivityEvent = literal([
    'server:control.console',
    'server:control.start',
    'server:control.stop',
    'server:control.restart',
    'server:control.kill',
    'server:file.create',
    'server:file.read',
    'server:file.update',
    'server:file.delete',
    'server:file.archive',
    'server:file.sftp',
    'server:backup.create',
    'server:backup.read',
    'server:backup.delete',
    'server:backup.download',
    'server:backup.restore',
    'server:allocation.read',
    'server:allocation.create',
    'server:allocation.update',
    'server:allocation.delete',
    'server:database.read',
    'server:database.create',
    'server:database.update',
    'server:schedule.read',
    'server:schedule.create',
    'server:schedule.update',
    'server:schedule.delete',
    'server:database.delete',
    'server:user.read',
    'server:user.create',
    'server:user.update',
    'server:user.delete',
    'server:startup.read',
    'server:startup.update',
    'server:admin.websocket.errors',
    'server:admin.websocket.install',
    'server:admin.websocket.transfer',
]);
export const assignAllocationSchema = object({
    ip: ipv4(),
    port: userServerPort,
});
export const editAllocationSchema = object({
    notes: string().min(1).max(255).optional(),
});
export const userServerCommandSchema = object({
    command: string(),
});
export const userServerWebsocketSchema = object({
    onConsoleOutput: zFunction({
        input: [string()],
        output: union([promise(zVoid()), zVoid()]),
    }).optional(),
    onStats: zFunction({
        input: [
            object({
                cpu_absolute: int().positive(),
                disk_bytes: int().positive(),
                memory_bytes: int().positive(),
                memory_limit_bytes: int().positive(),
                network: object({
                    rx_bytes: int().positive(),
                    tx_bytes: int().positive(),
                }),
                state: state,
                uptime: int().positive(),
            }),
        ],
        output: union([promise(zVoid()), zVoid()]),
    }).optional(),
    onStatusChange: zFunction({
        input: [state],
        output: union([promise(zVoid()), zVoid()]),
    }).optional(),
});
export const createBackupSchema = object({
    name: string().max(195).optional(),
    ignored: string().optional(),
    is_locked: boolean().optional(),
});
export const createScheduleSchema = object({
    name: string(),
    minute: cronString,
    hour: cronString,
    day_of_month: cronString,
    month: cronString,
    day_of_week: cronString,
    is_active: boolean().optional(),
    only_when_online: boolean().optional(),
});
export const createTaskSchema = discriminatedUnion('action', [
    object({
        action: literal('command'),
        payload: string(),
        time_offset: int().min(0).max(900),
        continue_on_failure: boolean().optional(),
    }),
    object({
        action: literal('power'),
        payload: literal(['start', 'stop', 'restart', 'kill']),
        time_offset: int().min(0).max(900),
        continue_on_failure: boolean().optional(),
    }),
    object({
        action: literal('backup'),
        payload: string().optional(),
        time_offset: int().min(0).max(900),
        continue_on_failure: boolean().optional(),
    }),
]);
export const serverPermissionSchema = literal([
    'control.console',
    'control.start',
    'control.stop',
    'control.restart',
    'control.kill',
    'file.create',
    'file.read',
    'file.update',
    'file.delete',
    'file.archive',
    'file.sftp',
    'backup.create',
    'backup.read',
    'backup.delete',
    'backup.download',
    'backup.restore',
    'allocation.read',
    'allocation.create',
    'allocation.update',
    'allocation.delete',
    'database.read',
    'database.create',
    'database.update',
    'database.delete',
    'schedule.read',
    'schedule.create',
    'schedule.update',
    'schedule.delete',
    'user.read',
    'user.create',
    'user.update',
    'user.delete',
    'startup.read',
    'startup.update',
    'admin.websocket.errors',
    'admin.websocket.install',
    'admin.websocket.transfer',
]);
export const subuserPermissionSchema = union([
    serverPermissionSchema,
    literal('*'),
]);
export const createSubuserSchema = object({
    email: string().email().min(1).max(191),
    permissions: subuserPermissionSchema.array(),
});
export const setSubuserPermissionsSchema = object({
    permissions: subuserPermissionSchema.array(),
});
export const createDatabaseSchema = object({
    database: string().min(1).max(48),
    remote: string(),
});
export const restoreBackupSchema = object({
    truncate: boolean().optional(),
});
export const setEnvironmentVariableSchema = object({
    key: string().uppercase(),
    value: string(),
});
export const setUserServerDetailsSchema = object({
    name: string().min(1).max(255),
    description: string().max(500).optional(),
});
export const editImageSchema = object({
    docker_image: string()
        .max(191)
        .regex(/^[\w#\.\/\- ]*\|?~?[\w\.\/\-:@ ]*$/),
});
