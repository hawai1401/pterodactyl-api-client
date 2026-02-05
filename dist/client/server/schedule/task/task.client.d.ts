import type HttpClient from "../../../../class/HttpClient.js";
import type { TaskAction } from "../../server.types.js";
import type { CreateScheduleTaskArgs } from "./task.types.js";
export default class TaskClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    create<T extends TaskAction>(id: string, schedule: number, options: CreateScheduleTaskArgs<T>): Promise<{
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
    edit<T extends TaskAction>(id: string, schedule: number, task: number, options: CreateScheduleTaskArgs<T>): Promise<{
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
    delete(id: string, schedule: number, task: number): Promise<void>;
}
//# sourceMappingURL=task.client.d.ts.map