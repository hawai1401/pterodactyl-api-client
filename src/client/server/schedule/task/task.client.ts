import type { HttpClient } from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import { createTaskSchema, userServerTaskId } from '../../server.schemas.js';
import type { infer as zInfer } from 'zod';
import type { CreateTaskPayload, Task, TaskObject } from '../tasks.types.js';

export class TaskClient {
  readonly task: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly schedule: number,
    task: number,
  ) {
    this.task = userServerTaskId.parse(task);
  }

  async edit<T extends TaskAction>(
    payload: CreateTaskPayload<T>,
  ): Promise<Task<T>> {
    const taskObject = await this.httpClient.request<
      TaskObject<T>,
      zInfer<typeof createTaskSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`,
      createTaskSchema.parse(payload),
      { parseDates: true },
    );
    return taskObject.attributes as Task<T>;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`,
    );
  }
}
