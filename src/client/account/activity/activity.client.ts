import type { ObjectListWithPagination, Paginated } from '../../../types.js';
import { buildQueryParams } from '../../../utils/buildQueryParams.js';
import { accountActivityEvent } from '../account.schemas.js';
import type {
  AccountActivity,
  AccountActivityObject,
  UserEvent,
  FetchActivityOptions,
} from './activity.types.js';
import { BaseClient } from '../../../class/BaseClient.js';

export class ActivityClient extends BaseClient {
  async fetch<Event extends UserEvent>(
    options?: FetchActivityOptions<Event>,
  ): Promise<Paginated<AccountActivity<Event>>> {
    const event = accountActivityEvent.optional().parse(options?.filter?.event);
    const queries = buildQueryParams({
      ...options,
      filter: { event },
    });
    const accountActivityListObject = await this.httpClient.request<
      ObjectListWithPagination<AccountActivityObject<Event>>
    >('GET', `/client/account/activity?${queries}`, { parseDates: true });
    return {
      data: accountActivityListObject.data.map(
        (activityObject) => activityObject.attributes as AccountActivity<Event>,
      ),
      pagination: accountActivityListObject.meta.pagination,
    };
  }
}
