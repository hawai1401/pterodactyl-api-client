import type z from "zod";
import type HttpClient from "../../../class/HttpClient.js";
import type { BaseListArgs, Sort } from "../../../types.js";
import buildQueryParams from "../../../utils/buildQueryParams.js";
import { accountActivityEvent } from "../account.schemas.js";
import type {
  AuthEvent,
  UserActivityList,
  UserEvent,
} from "./activity.types.js";

export default class ActivityClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends UserEvent | AuthEvent>({
    page,
    per_page,
    filter,
    sort,
  }:
    | BaseListArgs & {
        filter?:
          | {
              event?: T | undefined;
            }
          | undefined;
        sort?:
          | {
              timestamp?: Sort | undefined;
            }
          | undefined;
      }
    | undefined = {}): Promise<UserActivityList<Date, T>> {
    const event = accountActivityEvent.optional().parse(filter?.event);
    const queries = buildQueryParams<
      {
        event?: z.infer<typeof accountActivityEvent> | undefined;
      },
      {
        timestamp?: Sort | undefined;
      }
    >({
      page,
      per_page,
      filter: { event },
      sort,
    });
    const res = await this.httpClient.request<UserActivityList<string, T>>(
      "GET",
      `/client/account/activity?${queries}`,
    );
    return {
      ...res,
      data: res.data.map((activity) => ({
        ...activity,
        attributes: {
          ...activity.attributes,
          timestamp: new Date(activity.attributes.timestamp),
        },
      })),
    };
  }
}
