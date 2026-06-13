import type { BaseFetchOptions, Paginated } from '../../types.js';
import type { CreateLocationPayload, ListLocationsOptions, LocationId } from './location.types.js';
import { Location } from './location.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class LocationManager extends BaseCacheManager<LocationId, Location> {
    private httpClient;
    constructor(httpClient: HttpClient, cacheTtl?: number);
    list(options?: ListLocationsOptions): Promise<Paginated<Location>>;
    fetch(id: LocationId, options?: BaseFetchOptions): Promise<Location>;
    resolve(id: LocationId): Location;
    create(payload: CreateLocationPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<Location>;
}
//# sourceMappingURL=location.manager.d.ts.map