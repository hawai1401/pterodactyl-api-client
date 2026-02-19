import buildQueryParams from "../../../utils/buildQueryParams.js";
import { accountActivityEvent } from "../account.schemas.js";
export default class ActivityClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async list({ page, per_page, filter, sort, } = {}) {
        const event = accountActivityEvent.optional().parse(filter?.event);
        const queries = buildQueryParams({
            page,
            per_page,
            filter: { event },
            sort,
        });
        const res = await this.httpClient.request("GET", `/client/account/activity?${queries}`);
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
