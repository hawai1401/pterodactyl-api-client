import type HttpClient from "../../../class/HttpClient.js";
import type { BaseListArgs, Sort } from "../../../types.js";
import type { AuthEvent, UserActivityList, UserEvent } from "./activity.types.js";
export default class ActivityClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    list<T extends UserEvent | AuthEvent>({ page, per_page, filter, sort, }?: BaseListArgs & {
        filter?: {
            event?: T | undefined;
        } | undefined;
        sort?: {
            timestamp?: Sort | undefined;
        } | undefined;
    } | undefined): Promise<UserActivityList<Date, T>>;
}
//# sourceMappingURL=activity.client.d.ts.map