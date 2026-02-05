import type { BaseArgs, List } from "../../../types.js";
import type { Signal, TaskAction } from "../server.types.js";
export type CronString = "*" | `${number}` | `*/${number}`;
export interface ScheduleTask<T extends string | Date, A extends TaskAction = TaskAction> {
    object: "schedule_task";
    attributes: {
        id: number;
        sequence_id: number;
        action: A;
        payload: A extends "power" ? Signal : string;
        time_offset: number;
        is_queued: boolean;
        continue_on_failure: boolean;
        created_at: T;
        updated_at: T;
    };
}
export interface ScheduleTaskList extends List {
    data: ScheduleTask<string>[];
}
export interface Schedule<T extends string | Date> {
    object: "server_schedule";
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
        last_run_at: T | null;
        next_run_at: T;
        created_at: T;
        updated_at: T;
        relationships: {
            tasks: ScheduleTaskList;
        };
    };
}
export interface ScheduleList extends List {
    data: Schedule<string>[];
}
export interface CreateScheduleArgs extends BaseArgs {
    name: string;
    minute: CronString;
    hour: CronString;
    day_of_month: CronString;
    month: CronString;
    day_of_week: CronString;
    is_active?: boolean | undefined;
    only_when_online?: boolean | undefined;
}
//# sourceMappingURL=schedule.types.d.ts.map