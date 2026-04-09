import type HttpClient from '../../../class/HttpClient.js';
import TaskClient from './task/task.client.js';
import type { CreateScheduleArgs } from '../schedule.types.js';
import TasksClient from './tasks/tasks.client.js';
export default class ScheduleClient {
    private httpClient;
    readonly server: string;
    tasks: TasksClient;
    readonly schedule: number;
    constructor(httpClient: HttpClient, server: string, schedule: number);
    task(task: number): TaskClient;
    info(): Promise<{
        attributes: {
            last_run_at: Date | null;
            next_run_at: Date;
            created_at: Date;
            updated_at: Date;
            relationships: {
                tasks: {
                    data: {
                        attributes: {
                            created_at: Date;
                            updated_at: Date;
                            id: number;
                            sequence_id: number;
                            action: import("../server.types.js").TaskAction;
                            payload: string;
                            time_offset: number;
                            is_queued: boolean;
                            continue_on_failure: boolean;
                        };
                        object: "schedule_task";
                    }[];
                    object: "list";
                };
            };
        };
        object: "server_schedule";
    }>;
    edit(options: CreateScheduleArgs): Promise<void>;
    delete(): Promise<void>;
    execute(): Promise<void>;
}
//# sourceMappingURL=schedule.client.d.ts.map