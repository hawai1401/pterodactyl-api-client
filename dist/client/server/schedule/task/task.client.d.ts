import type HttpClient from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { CreateScheduleTaskArgs } from '../tasks.types.js';
export default class TaskClient {
    private httpClient;
    readonly server: string;
    readonly schedule: number;
    readonly task: number;
    constructor(httpClient: HttpClient, server: string, schedule: number, task: number);
    edit<T extends TaskAction>(options: CreateScheduleTaskArgs<T>): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            sequence_id: number;
            action: TaskAction;
            payload: string;
            time_offset: number;
            is_queued: boolean;
            continue_on_failure: boolean;
        };
        object: "schedule_task";
    }>;
    delete(): Promise<void>;
}
//# sourceMappingURL=task.client.d.ts.map