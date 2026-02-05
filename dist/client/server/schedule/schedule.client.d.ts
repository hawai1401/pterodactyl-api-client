import type HttpClient from "../../../class/HttpClient.js";
import type { CreateScheduleArgs } from "./schedule.types.js";
import TaskClient from "./task/task.client.js";
export default class ScheduleClient {
    private httpClient;
    task: TaskClient;
    constructor(httpClient: HttpClient);
    list(id: string): Promise<{
        data: {
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
                id: number;
                name: string;
                cron: {
                    day_of_week: import("./schedule.types.js").CronString;
                    day_of_month: import("./schedule.types.js").CronString;
                    month: import("./schedule.types.js").CronString;
                    hour: import("./schedule.types.js").CronString;
                    minute: import("./schedule.types.js").CronString;
                };
                is_active: boolean;
                is_processing: boolean;
                only_when_online: boolean;
            };
            object: "server_schedule";
        }[];
        object: "list";
    }>;
    info(id: string, schedule: number): Promise<{
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
    create(id: string, options: CreateScheduleArgs): Promise<{
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
    edit(id: string, schedule: number, options: CreateScheduleArgs): Promise<void>;
    delete(id: string, schedule: number): Promise<void>;
    execute(id: string, schedule: number): Promise<void>;
}
//# sourceMappingURL=schedule.client.d.ts.map