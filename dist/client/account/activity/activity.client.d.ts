import type HttpClient from "../../../class/HttpClient.js";
import type { Sort } from "../../../types.js";
import type { AuthEvent, UserActivityList, UserEvent } from "./activity.types.js";
export default class ActivityClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends UserEvent | AuthEvent>({ page, per_page, event, sort, }?: {
        page?: number | undefined;
        per_page?: number | undefined;
        event?: T | undefined;
        sort?: {
            timestamp?: Sort | undefined;
        };
    }): Promise<UserActivityList<Date, T>>;
}
//# sourceMappingURL=activity.client.d.ts.map