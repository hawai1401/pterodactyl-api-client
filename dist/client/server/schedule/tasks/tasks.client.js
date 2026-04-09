import { createTaskSchema } from '../../server.schemas.js';
export default class TasksClient {
    httpClient;
    server;
    schedule;
    constructor(httpClient, server, schedule) {
        this.httpClient = httpClient;
        this.server = server;
        this.schedule = schedule;
    }
    async list() {
        const res = await this.httpClient.request('GET', `/client/servers/${this.server}/schedules/${this.schedule}`);
        return {
            ...res.attributes.relationships.tasks,
            data: res.attributes.relationships.tasks.data.map((task) => ({
                ...task,
                attributes: {
                    ...task.attributes,
                    created_at: new Date(task.attributes.created_at),
                    updated_at: new Date(task.attributes.updated_at),
                },
            })),
        };
    }
    async create(options) {
        const res = await this.httpClient.request('POST', `/client/servers/${this.server}/schedules/${this.schedule}/tasks`, createTaskSchema.parse(options));
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
}
