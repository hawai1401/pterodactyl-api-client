import HttpClient from "../../../class/HttpClient.js";
import { userServerActivityPaginationSchema, userServerId } from "../server.schemas.js";
export default class ActivityClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list(id, { page, per_page, event, sort, } = {}) {
        const parsedValues = userServerActivityPaginationSchema.parse({
            page,
            per_page,
            event,
            sort,
        });
        const res = await this.httpClient.request("GET", `/client/servers/${userServerId.parse(id)}/activity?page=${parsedValues.page ?? 1}&per_page=${parsedValues.per_page ?? 50}${parsedValues.event ? `&filter[event]=${parsedValues.event}` : ""}${parsedValues.sort?.timestamp ? (parsedValues.sort.timestamp === "ascending" ? "&sort=timestamp" : "&sort=-timestamp") : ""}`);
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
