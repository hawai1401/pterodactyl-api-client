import type { Paginated } from '../../../types.js';
import type { AccountActivity, UserEvent, FetchActivityOptions } from './activity.types.js';
import { BaseClient } from '../../../class/BaseClient.js';
export declare class ActivityClient extends BaseClient {
    fetch<Event extends UserEvent>(options?: FetchActivityOptions<Event>): Promise<Paginated<AccountActivity<Event>>>;
}
//# sourceMappingURL=activity.client.d.ts.map