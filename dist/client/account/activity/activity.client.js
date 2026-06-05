import { buildQueryParams } from '../../../utils/buildQueryParams.js';
import { accountActivityEvent } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class ActivityClient extends BaseClient {
    async fetch(options) {
        const event = accountActivityEvent.optional().parse(options?.filter?.event);
        const queries = buildQueryParams({
            ...options,
            filter: { event },
        });
        const accountActivityListObject = await this.httpClient.request('GET', `/client/account/activity?${queries}`, { parseDates: true });
        return {
            data: accountActivityListObject.data.map((activityObject) => activityObject.attributes),
            pagination: accountActivityListObject.meta.pagination,
        };
    }
}
