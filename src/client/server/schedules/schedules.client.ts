import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import type {
  CreateScheduleArgs,
  Schedule,
  ScheduleList,
} from '../schedule.types.js';
import { createScheduleSchema } from '../server.schemas.js';

export default class SchedulesClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async list() {
    const res = await this.httpClient.request<ScheduleList>(
      'GET',
      `/client/servers/${this.server}/schedules`,
    );
    return {
      ...res,
      data: res.data.map((schedule) => ({
        ...schedule,
        attributes: {
          ...schedule.attributes,
          last_run_at: schedule.attributes.last_run_at
            ? new Date(schedule.attributes.last_run_at)
            : null,
          next_run_at: new Date(schedule.attributes.next_run_at),
          created_at: new Date(schedule.attributes.created_at),
          updated_at: new Date(schedule.attributes.updated_at),
          relationships: {
            tasks: {
              ...schedule.attributes.relationships.tasks,
              data: schedule.attributes.relationships.tasks.data.map(
                (task) => ({
                  ...task,
                  attributes: {
                    ...task.attributes,
                    created_at: new Date(task.attributes.created_at),
                    updated_at: new Date(task.attributes.updated_at),
                  },
                }),
              ),
            },
          },
        },
      })),
    };
  }

  async create(options: CreateScheduleArgs) {
    const res = await this.httpClient.request<
      Schedule<string>,
      z.infer<typeof createScheduleSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules`,
      createScheduleSchema.parse(options),
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
}
