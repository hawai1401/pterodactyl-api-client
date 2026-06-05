import { createTaskSchema, userServerTaskId } from '../../server.schemas.js';
export class TaskClient {
    httpClient;
    server;
    schedule;
    task;
    constructor(httpClient, server, schedule, task) {
        this.httpClient = httpClient;
        this.server = server;
        this.schedule = schedule;
        this.task = userServerTaskId.parse(task);
    }
    async edit(payload) {
        const taskObject = await this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`, createTaskSchema.parse(payload), { parseDates: true });
        return taskObject.attributes;
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`);
    }
}
