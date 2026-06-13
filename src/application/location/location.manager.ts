import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import type {
  CreateLocationPayload,
  ListLocationsOptions,
  LocationId,
  LocationObject,
} from './location.types.js';
import {
  createLocationSchema,
  listLocationsFilterSchema,
  locationId,
} from './location.schemas.js';
import { Location } from './location.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';

export class LocationManager extends BaseCacheManager<LocationId, Location> {
  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(options?: ListLocationsOptions): Promise<Paginated<Location>> {
    const queries = buildQueryParams({
      ...options,
      filter: listLocationsFilterSchema.optional().parse(options?.filter),
    });

    const locationObjectList = await this.httpClient.request<
      ObjectListWithPagination<LocationObject>
    >('GET', `/application/locations?${queries}`, { parseDates: true });

    return {
      data: locationObjectList.data.map((locationObject) =>
        this.setCache(
          new Location(this.httpClient, this, locationObject.attributes),
          options?.cache,
        ),
      ),
      pagination: locationObjectList.meta.pagination,
    };
  }

  async fetch(id: LocationId, options?: BaseFetchOptions): Promise<Location> {
    const cacheLocation = this.getCache(id);
    if (cacheLocation && !options?.force) return cacheLocation;

    return this.setCache(
      new Location(
        this.httpClient,
        this,
        (
          await this.httpClient.request<LocationObject>(
            'GET',
            `/application/locations/${locationId.parse(id)}`,
            { parseDates: true },
          )
        ).attributes,
      ),
      options?.cache,
    );
  }

  resolve(id: LocationId): Location {
    return super.resolve(
      id,
      () =>
        new Location(this.httpClient, this, {
          id: locationId.parse(id),
        }),
    );
  }

  async create(
    payload: CreateLocationPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<Location> {
    return this.setCache(
      new Location(
        this.httpClient,
        this,
        (
          await this.httpClient.request<
            LocationObject,
            zInfer<typeof createLocationSchema>
          >(
            'POST',
            '/application/locations',
            createLocationSchema.parse(payload),
            {
              parseDates: true,
            },
          )
        ).attributes,
      ),
      options?.cache,
    );
  }
}
