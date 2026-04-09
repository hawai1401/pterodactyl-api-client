import type HttpClient from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { ScheduleTask } from '../schedule.types.js';
import {
  createTaskSchema,
  userServerScheduleTaskId,
} from '../../server.schemas.js';
import type z from 'zod';
import type { CreateScheduleTaskArgs } from '../tasks.types.js';

export default class TaskClient {
  readonly task: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly schedule: number,
    task: number,
  ) {
    this.task = userServerScheduleTaskId.parse(task);
  }

  async edit<T extends TaskAction>(options: CreateScheduleTaskArgs<T>) {
    const res = await this.httpClient.request<
      ScheduleTask<string>,
      z.infer<typeof createTaskSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`,
      createTaskSchema.parse(options),
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks/${this.task}`,
    );
  }
}
