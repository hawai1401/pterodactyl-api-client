import HttpClient from "../../../class/HttpClient.js";
import type { Sort } from "../../../types.js";
import { userServerActivityPaginationSchema, userServerId } from "../server.schemas.js";
import type { ServerActivityList, ServerEvent } from "./activity.types.js";

export default class ActivityClient {
  constructor(private httpClient: HttpClient) {}

  async list<T extends ServerEvent>(
    id: string,
    {
      page,
      per_page,
      event,
      sort,
    }: {
      page?: number | undefined;
      per_page?: number | undefined;
      event?: T | undefined;
      sort?: {
        timestamp?: Sort | undefined;
      };
    } = {},
  ): Promise<ServerActivityList<Date, T>> {
    const parsedValues = userServerActivityPaginationSchema.parse({
      page,
      per_page,
      event,
      sort,
    });
    const res = await this.httpClient.request<ServerActivityList<string, T>>(
      "GET",
      `/client/servers/${userServerId.parse(id)}/activity?page=${parsedValues.page ?? 1}&per_page=${parsedValues.per_page ?? 50}${parsedValues.event ? `&filter[event]=${parsedValues.event}` : ""}${parsedValues.sort?.timestamp ? (parsedValues.sort.timestamp === "ascending" ? "&sort=timestamp" : "&sort=-timestamp") : ""}`,
    );
    return {
      ...res,
      data: res.data.map((data) => ({
        ...data,
        attributes: {
          ...data.attributes,
          timestamp: new Date(data.attributes.timestamp),
        },
      })),
    };
  }
}
