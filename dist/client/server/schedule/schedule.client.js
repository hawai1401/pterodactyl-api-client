import { createScheduleSchema, userServerScheduleId, } from '../server.schemas.js';
import { TaskClient } from './task/task.client.js';
import { TasksClient } from './tasks/tasks.client.js';
export class ScheduleClient {
    httpClient;
    server;
    tasks;
    schedule;
    constructor(httpClient, server, schedule) {
        this.httpClient = httpClient;
        this.server = server;
        this.schedule = userServerScheduleId.parse(schedule);
        this.tasks = new TasksClient(httpClient, server, this.schedule);
    }
    task(task) {
        return new TaskClient(this.httpClient, this.server, this.schedule, task);
    }
    async fetch() {
        const scheduleObject = await this.httpClient.request('GET', `/client/servers/${this.server}/schedules/${this.schedule}`, { parseDates: true });
        const { relationships, ...attributes } = scheduleObject.attributes;
        return {
            ...attributes,
            tasks: relationships.tasks.data.map((taskObject) => taskObject.attributes),
        };
    }
    update(payload) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}`, createScheduleSchema.parse(payload));
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/schedules/${this.schedule}`);
    }
    execute() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/execute`);
    }
}
