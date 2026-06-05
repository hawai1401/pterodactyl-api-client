import type { HttpClient } from '../../../class/HttpClient.js';
import {
  createScheduleSchema,
  userServerScheduleId,
} from '../server.schemas.js';
import { TaskClient } from './task/task.client.js';
import type { infer as zInfer } from 'zod';
import { TasksClient } from './tasks/tasks.client.js';
import type {
  CreateSchedulePayload,
  Schedule,
  ScheduleObject,
} from '../schedules/schedules.types.js';

export class ScheduleClient {
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

  async fetch(): Promise<Schedule> {
    const scheduleObject = await this.httpClient.request<ScheduleObject>(
      'GET',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
      { parseDates: true },
    );
    const { relationships, ...attributes } = scheduleObject.attributes;
    return {
      ...attributes,
      tasks: relationships.tasks.data.map(
        (taskObject) => taskObject.attributes,
      ),
    };
  }

  update(payload: CreateSchedulePayload) {
    return this.httpClient.request<void, zInfer<typeof createScheduleSchema>>(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
      createScheduleSchema.parse(payload),
    );
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/client/servers/${this.server}/schedules/${this.schedule}`,
    );
  }

  execute() {
    return this.httpClient.request(
      'POST',
      `/client/servers/${this.server}/schedules/${this.schedule}/execute`,
    );
  }
}
