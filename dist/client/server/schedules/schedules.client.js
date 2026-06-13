import { createScheduleSchema } from '../server.schemas.js';
export class SchedulesClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const scheduleObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/schedules`, { parseDates: true });
        return scheduleObjectList.data.map((scheduleObject) => {
            const { relationships, ...scheduleAttributes } = scheduleObject.attributes;
            return {
                ...scheduleAttributes,
                tasks: relationships.tasks.data.map((taskObject) => taskObject.attributes),
            };
        });
    }
    async create(payload) {
        const scheduleObject = await this.httpClient.request('POST', `/client/servers/${this.server}/schedules`, createScheduleSchema.parse(payload), { parseDates: true });
        const { relationships, ...scheduleAttributes } = scheduleObject.attributes;
        return {
            ...scheduleAttributes,
            tasks: relationships.tasks.data.map((taskObject) => taskObject.attributes),
        };
    }
}
