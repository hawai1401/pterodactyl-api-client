import type { HttpClient } from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { CreateTaskPayload, Task } from '../tasks.types.js';
export declare class TaskClient {
    private httpClient;
    readonly server: string;
    readonly schedule: number;
    readonly task: number;
    constructor(httpClient: HttpClient, server: string, schedule: number, task: number);
    edit<T extends TaskAction>(payload: CreateTaskPayload<T>): Promise<Task<T>>;
    delete(): Promise<void>;
}
//# sourceMappingURL=task.client.d.ts.map