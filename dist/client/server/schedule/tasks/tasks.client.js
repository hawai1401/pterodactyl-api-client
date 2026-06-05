import { createTaskSchema } from '../../server.schemas.js';
export class TasksClient {
    httpClient;
    server;
    schedule;
    constructor(httpClient, server, schedule) {
        this.httpClient = httpClient;
        this.server = server;
        this.schedule = schedule;
    }
    async fetch() {
        const scheduleObject = await this.httpClient.request('GET', `/client/servers/${this.server}/schedules/${this.schedule}`, { parseDates: true });
        return scheduleObject.attributes.relationships.tasks.data.map((taskObject) => taskObject.attributes);
    }
    async create(payload) {
        const taskObject = await this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/tasks`, createTaskSchema.parse(payload), { parseDates: true });
        return taskObject.attributes;
    }
}
