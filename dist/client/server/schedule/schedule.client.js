import { createScheduleSchema, userServerId, userServerScheduleId, } from "../server.schemas.js";
import TaskClient from "./task/task.client.js";
export default class ScheduleClient {
    httpClient;
    task;
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.task = new TaskClient(httpClient);
    }
    async list(id) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/schedules`);
        return {
            ...res,
            data: res.data.map((schedule) => ({
                ...schedule,
                attributes: {
                    ...schedule.attributes,
                    last_run_at: schedule.attributes.last_run_at
                        ? new Date(schedule.attributes.last_run_at)
                        : null,
                    next_run_at: new Date(schedule.attributes.next_run_at),
                    created_at: new Date(schedule.attributes.created_at),
                    updated_at: new Date(schedule.attributes.updated_at),
                    relationships: {
                        tasks: {
                            ...schedule.attributes.relationships.tasks,
                            data: schedule.attributes.relationships.tasks.data.map((task) => ({
                                ...task,
                                attributes: {
                                    ...task.attributes,
                                    created_at: new Date(task.attributes.created_at),
                                    updated_at: new Date(task.attributes.updated_at),
                                },
                            })),
                        },
                    },
                },
            })),
        };
    }
    async info(id, schedule) {
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/schedules/${schedule}`);
        return {
            ...res,
            attributes: {
                last_run_at: res.attributes.last_run_at
                    ? new Date(res.attributes.last_run_at)
                    : null,
                next_run_at: new Date(res.attributes.next_run_at),
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
                relationships: {
                    tasks: {
                        ...res.attributes.relationships.tasks,
                        data: res.attributes.relationships.tasks.data.map((task) => ({
                            ...task,
                            attributes: {
                                ...task.attributes,
                                created_at: new Date(task.attributes.created_at),
                                updated_at: new Date(task.attributes.updated_at),
                            },
                        })),
                    },
                },
            },
        };
    }
    async create(id, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/schedules`, createScheduleSchema.parse(options));
        return {
            ...res,
            attributes: {
                last_run_at: res.attributes.last_run_at
                    ? new Date(res.attributes.last_run_at)
                    : null,
                next_run_at: new Date(res.attributes.next_run_at),
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
                relationships: {
                    tasks: {
                        ...res.attributes.relationships.tasks,
                        data: res.attributes.relationships.tasks.data.map((task) => ({
                            ...task,
                            attributes: {
                                ...task.attributes,
                                created_at: new Date(task.attributes.created_at),
                                updated_at: new Date(task.attributes.updated_at),
                            },
                        })),
                    },
                },
            },
        };
    }
    edit(id, schedule, options) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(schedule)}`, createScheduleSchema.parse(options));
    }
    delete(id, schedule) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(schedule)}`);
    }
    execute(id, schedule) {
        return this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(schedule)}/execute`);
    }
}
