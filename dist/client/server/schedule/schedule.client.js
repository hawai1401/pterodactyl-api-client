import { createScheduleSchema, userServerScheduleId, } from '../server.schemas.js';
import TaskClient from './task/task.client.js';
import TasksClient from './tasks/tasks.client.js';
export default class ScheduleClient {
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
    async info() {
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/schedules/${this.schedule}`);
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
    edit(options) {
        return this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}`, createScheduleSchema.parse(options));
    }
    delete() {
        return this.httpClient.request('DELETE', `/client/servers/${this.server}/schedules/${this.schedule}`);
    }
    execute() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/execute`);
    }
}
