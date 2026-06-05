import type { CreateLocationPayload, FetchLocationsOptions, Location } from './locations.types.js';
import { type Paginated } from '../../types.js';
import { BaseClient } from '../../class/BaseClient.js';
export declare class LocationsClient extends BaseClient {
    fetch(options?: FetchLocationsOptions): Promise<Paginated<Location>>;
    create(payload: CreateLocationPayload): Promise<Location>;
}
//# sourceMappingURL=locations.client.d.ts.map