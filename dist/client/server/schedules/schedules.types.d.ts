import type { BasePayload, ObjectList } from '../../../types.js';
import type { Task, TaskObject } from '../schedule/tasks.types.js';
export type CronString = '*' | `${number}` | `*/${number}`;
export interface ScheduleObject {
    object: 'server_schedule';
    attributes: {
        id: number;
        name: string;
        cron: {
            day_of_week: CronString;
            day_of_month: CronString;
            month: CronString;
            hour: CronString;
            minute: CronString;
        };
        is_active: boolean;
        is_processing: boolean;
        only_when_online: boolean;
        last_run_at: Date | null;
        next_run_at: Date;
        created_at: Date;
        updated_at: Date;
        relationships: {
            tasks: ObjectList<TaskObject>;
        };
    };
}
export interface Schedule {
    id: number;
    name: string;
    cron: {
        dayOfWeek: CronString;
        dayOfMonth: CronString;
        month: CronString;
        hour: CronString;
        minute: CronString;
    };
    isActive: boolean;
    isProcessing: boolean;
    onlyWhenOnline: boolean;
    lastRunAt: Date | null;
    nextRunAt: Date;
    createdAt: Date;
    updatedAt: Date;
    tasks: Task[];
}
export interface CreateSchedulePayload extends BasePayload {
    name: string;
    minute: CronString;
    hour: CronString;
    day_of_month: CronString;
    month: CronString;
    day_of_week: CronString;
    is_active?: boolean | undefined;
    only_when_online?: boolean | undefined;
}
//# sourceMappingURL=schedules.types.d.ts.map