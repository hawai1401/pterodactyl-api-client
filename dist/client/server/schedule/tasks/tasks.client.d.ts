import type HttpClient from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { CreateScheduleTaskArgs } from '../tasks.types.js';
export default class TasksClient {
    private httpClient;
    readonly server: string;
    readonly schedule: number;
    constructor(httpClient: HttpClient, server: string, schedule: number);
    list(): Promise<{
        data: {
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
        }[];
        object: "list";
    }>;
    create<T extends TaskAction>(options: CreateScheduleTaskArgs<T>): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            sequence_id: number;
            action: T;
            payload: T extends "power" ? import("../../server.types.js").Signal : string;
            time_offset: number;
            is_queued: boolean;
            continue_on_failure: boolean;
        };
        object: "schedule_task";
    }>;
}
//# sourceMappingURL=tasks.client.d.ts.map