import type { HttpClient } from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { CreateTaskPayload, Task, TaskObject } from '../tasks.types.js';
import { createTaskSchema } from '../../server.schemas.js';
import type { infer as zInfer } from 'zod';
import type { ScheduleObject } from '../../schedules/schedules.types.js';

export class TasksClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly schedule: number,
  ) {}

  async fetch(): Promise<Task[]> {
    const scheduleObject = await this.httpClient.request<ScheduleObject>(
      'GET',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
      { parseDates: true },
    );
    return scheduleObject.attributes.relationships.tasks.data.map(
      (taskObject) => taskObject.attributes,
    );
  }

  async create<T extends TaskAction>(
    payload: CreateTaskPayload<T>,
  ): Promise<Task<T>> {
    const taskObject = await this.httpClient.request<
      TaskObject<T>,
      zInfer<typeof createTaskSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks`,
      createTaskSchema.parse(payload),
      { parseDates: true },
    );
    return taskObject.attributes as Task<T>;
  }
}
