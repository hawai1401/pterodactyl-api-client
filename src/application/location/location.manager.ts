import type { infer as zInfer } from 'zod';
import type {
  BaseFetchOptions,
  NonMethodPartial,
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
import { ApplicationLocation } from './location.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';

export class ApplicationLocationManager extends BaseCacheManager<
  LocationId,
  ApplicationLocation
> {
  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: ListLocationsOptions,
  ): Promise<Paginated<ApplicationLocation>> {
    const filter = listLocationsFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({
      ...options,
      filter,
    });

    const locationObjectList = await this.httpClient.request<
      ObjectListWithPagination<LocationObject>
    >('GET', `/application/locations?${queries}`, { parseDates: true });

    return {
      data: locationObjectList.data.map((locationObject) =>
        this.setCache(
          new ApplicationLocation(
            this.httpClient,
            this,
            locationObject.attributes,
          ),
          options?.cache,
        ),
      ),
      pagination: locationObjectList.meta.pagination,
    };
  }

  async fetch(
    id: LocationId,
    options?: BaseFetchOptions,
  ): Promise<ApplicationLocation> {
    const cacheLocation = this.getCache(id);
    if (cacheLocation && !options?.force) return cacheLocation;

    const parsedId = locationId.parse(id);
    const locationObject = await this.httpClient.request<LocationObject>(
      'GET',
      `/application/locations/${parsedId}`,
      { parseDates: true },
    );

    return this.setCache(
      new ApplicationLocation(this.httpClient, this, locationObject.attributes),
      options?.cache,
    );
  }

  resolve(
    id: LocationId,
  ):
    | ApplicationLocation
    | (NonMethodPartial<ApplicationLocation> &
        Pick<ApplicationLocation, 'id'>) {
    return (
      this.getCache(id) ??
      new ApplicationLocation(this.httpClient, this, {
        id: locationId.parse(id),
      })
    );
  }

  async create(
    payload: CreateLocationPayload,
    options?: Pick<BaseFetchOptions, 'cache'>,
  ): Promise<ApplicationLocation> {
    const locationObject = await this.httpClient.request<
      LocationObject,
      zInfer<typeof createLocationSchema>
    >('POST', '/application/locations', createLocationSchema.parse(payload), {
      parseDates: true,
    });
    return this.setCache(
      new ApplicationLocation(this.httpClient, this, locationObject.attributes),
      options?.cache,
    );
  }
}
