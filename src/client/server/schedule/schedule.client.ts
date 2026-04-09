import type HttpClient from '../../../class/HttpClient.js';
import {
  createScheduleSchema,
  userServerScheduleId,
} from '../server.schemas.js';
import TaskClient from './task/task.client.js';
import type z from 'zod';
import type { CreateScheduleArgs, Schedule } from '../schedule.types.js';
import TasksClient from './tasks/tasks.client.js';

export default class ScheduleClient {
  public tasks: TasksClient;
  readonly schedule: number;

  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    schedule: number,
  ) {
    this.schedule = userServerScheduleId.parse(schedule);
    this.tasks = new TasksClient(httpClient, server, this.schedule);
  }

  task(task: number) {
    return new TaskClient(this.httpClient, this.server, this.schedule, task);
  }

  async info() {
    const res = await this.httpClient.request<Schedule<string>>(
      'GET',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
    );
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

  edit(options: CreateScheduleArgs) {
    return this.httpClient.request<void, z.infer<typeof createScheduleSchema>>(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
      createScheduleSchema.parse(options),
    );
  }

  delete() {
    return this.httpClient.request<void>(
      'DELETE',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
    );
  }

  execute() {
    return this.httpClient.request<void>(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/execute`,
    );
  }
}
