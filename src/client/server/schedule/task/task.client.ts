import type HttpClient from "../../../../class/HttpClient.js";
import type { TaskAction } from "../../server.types.js";
import type { ScheduleTask } from "../schedule.types.js";
import type { CreateScheduleTaskArgs } from "./task.types.js";
import {
  createTaskSchema,
  userServerId,
  userServerScheduleId,
  userServerScheduleTaskId,
} from "../../server.schemas.js";
import type z from "zod";

export default class TaskClient {
  constructor(private httpClient: HttpClient) {}

  async create<T extends TaskAction>(
    id: string,
    schedule: number,
    options: CreateScheduleTaskArgs<T>,
  ) {
    const res = await this.httpClient.request<
      ScheduleTask<string>,
      z.infer<typeof createTaskSchema>
    >(
      "POST",
      `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks`,
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

  async edit<T extends TaskAction>(
    id: string,
    schedule: number,
    task: number,
    options: CreateScheduleTaskArgs<T>,
  ) {
    const res = await this.httpClient.request<
      ScheduleTask<string>,
      z.infer<typeof createTaskSchema>
    >(
      "POST",
      `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks/${userServerScheduleTaskId.parse(task)}`,
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

  delete(id: string, schedule: number, task: number) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${userServerId.parse(id)}/schedules/${userServerScheduleId.parse(id)}/tasks/${userServerScheduleTaskId.parse(task)}`,
    );
  }
}
