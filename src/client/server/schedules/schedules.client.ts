import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../../class/HttpClient.js';
import { createScheduleSchema } from '../server.schemas.js';
import type { ObjectList } from '../../../types.js';
import type {
  CreateSchedulePayload,
  Schedule,
  ScheduleObject,
} from './schedules.types.js';

export class SchedulesClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<Schedule[]> {
    const scheduleObjectList = await this.httpClient.request<
      ObjectList<ScheduleObject>
    >('GET', `/client/servers/${this.server}/schedules`, { parseDates: true });
    return scheduleObjectList.data.map((scheduleObject) => {
      const { relationships, ...scheduleAttributes } =
        scheduleObject.attributes;
      return {
        ...scheduleAttributes,
        tasks: relationships.tasks.data.map(
          (taskObject) => taskObject.attributes,
        ),
      };
    });
  }

  async create(payload: CreateSchedulePayload): Promise<Schedule> {
    const scheduleObject = await this.httpClient.request<
      ScheduleObject,
      zInfer<typeof createScheduleSchema>
    >(
      'POST',
      `/client/servers/${this.server}/schedules`,
      createScheduleSchema.parse(payload),
      { parseDates: true },
    );

    const { relationships, ...scheduleAttributes } = scheduleObject.attributes;
    return {
      ...scheduleAttributes,
      tasks: relationships.tasks.data.map(
        (taskObject) => taskObject.attributes,
      ),
    };
  }
}
