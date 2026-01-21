import type HttpClient from "../../../class/HttpClient.js";
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
    event,
  }: {
    page?: number | undefined;
    per_page?: number | undefined;
    event?: T | undefined;
  }): Promise<UserActivityList<Date, T>> {
    const res = await this.httpClient.request<UserActivityList<string, T>>(
      "GET",
      `/client/account/activity?page=${page ?? 1}&per_page=${per_page ?? 50}${event ? `&filter[event]=${event}` : ""}`,
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
