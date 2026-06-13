import type { BaseFetchOptions, NonMethodPartial, Paginated } from '../../types.js';
import type { CreateLocationPayload, ListLocationsOptions, LocationId } from './location.types.js';
import { ApplicationLocation } from './location.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
export declare class ApplicationLocationManager extends BaseCacheManager<LocationId, ApplicationLocation> {
    private httpClient;
    constructor(httpClient: HttpClient, cacheTtl?: number);
    list(options?: ListLocationsOptions): Promise<Paginated<ApplicationLocation>>;
    fetch(id: LocationId, options?: BaseFetchOptions): Promise<ApplicationLocation>;
    resolve(id: LocationId): ApplicationLocation | (NonMethodPartial<ApplicationLocation> & Pick<ApplicationLocation, 'id'>);
    create(payload: CreateLocationPayload, options?: Pick<BaseFetchOptions, 'cache'>): Promise<ApplicationLocation>;
}
//# sourceMappingURL=location.manager.d.ts.map