import type { HttpClient } from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { CreateTaskPayload, Task } from '../tasks.types.js';
export declare class TasksClient {
    private httpClient;
    readonly server: string;
    readonly schedule: number;
    constructor(httpClient: HttpClient, server: string, schedule: number);
    fetch(): Promise<Task[]>;
    create<T extends TaskAction>(payload: CreateTaskPayload<T>): Promise<Task<T>>;
}
//# sourceMappingURL=tasks.client.d.ts.map