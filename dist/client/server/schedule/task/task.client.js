import { createTaskSchema, userServerScheduleTaskId, } from '../../server.schemas.js';
export default class TaskClient {
    httpClient;
    server;
    schedule;
    task;
    constructor(httpClient, server, schedule, task) {
        this.httpClient = httpClient;
        this.server = server;
        this.schedule = schedule;
        this.task = userServerScheduleTaskId.parse(task);
    }
    async edit(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`, createTaskSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`);
    }
}
