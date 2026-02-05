import { accountActivityPaginationSchema } from "../account.schemas.js";
export default class ActivityClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list({ page, per_page, event, sort, } = {}) {
        const parsedValues = accountActivityPaginationSchema.parse({
            page,
            per_page,
            event,
            sort,
        });
        const res = await this.httpClient.request("GET", `/client/account/activity?page=${parsedValues.page ?? 1}&per_page=${parsedValues.per_page ?? 50}${parsedValues.event ? `&filter[event]=${parsedValues.event}` : ""}${parsedValues.sort?.timestamp ? (parsedValues.sort.timestamp === "ascending" ? "&sort=timestamp" : "&sort=-timestamp") : ""}`);
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
