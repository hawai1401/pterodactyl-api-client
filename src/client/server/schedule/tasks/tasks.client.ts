import type HttpClient from '../../../../class/HttpClient.js';
import type { TaskAction } from '../../server.types.js';
import type { Schedule, ScheduleTask } from '../schedule.types.js';
import type { CreateScheduleTaskArgs } from '../tasks.types.js';
import { createTaskSchema } from '../../server.schemas.js';
import type z from 'zod';

export default class TasksClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly schedule: number,
  ) {}

  async list() {
    const res = await this.httpClient.request<Schedule<string>>(
      'GET',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
    );
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

  async create<T extends TaskAction>(options: CreateScheduleTaskArgs<T>) {
    const res = await this.httpClient.request<
      ScheduleTask<string, T>,
      z.infer<typeof createTaskSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/tasks`,
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
}
