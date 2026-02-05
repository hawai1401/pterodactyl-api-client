import { createTaskSchema, userServerId, userServerScheduleId, userServerScheduleTaskId, } from "../../server.schemas.js";
export default class TaskClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async create(id, schedule, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks`, createTaskSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit(id, schedule, task, options) {
        const res = await this.httpClient.request("POST", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks/${userServerScheduleTaskId.parse(task)}`, createTaskSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete(id, schedule, task) {
        return this.httpClient.request("DELETE", `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks/${userServerScheduleTaskId.parse(task)}`);
    }
}
