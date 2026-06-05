import type { HttpClient } from '../../../class/HttpClient.js';
import { TaskClient } from './task/task.client.js';
import { TasksClient } from './tasks/tasks.client.js';
import type { CreateSchedulePayload, Schedule } from '../schedules/schedules.types.js';
export declare class ScheduleClient {
    private httpClient;
    readonly server: string;
    tasks: TasksClient;
    readonly schedule: number;
    constructor(httpClient: HttpClient, server: string, schedule: number);
    task(task: number): TaskClient;
    fetch(): Promise<Schedule>;
    update(payload: CreateSchedulePayload): Promise<void>;
    delete(): Promise<void>;
    execute(): Promise<void>;
}
//# sourceMappingURL=schedule.client.d.ts.map