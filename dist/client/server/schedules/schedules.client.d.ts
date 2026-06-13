import type { HttpClient } from '../../../class/HttpClient.js';
import type { CreateSchedulePayload, Schedule } from './schedules.types.js';
export declare class SchedulesClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    fetch(): Promise<Schedule[]>;
    create(payload: CreateSchedulePayload): Promise<Schedule>;
}
//# sourceMappingURL=schedules.client.d.ts.map