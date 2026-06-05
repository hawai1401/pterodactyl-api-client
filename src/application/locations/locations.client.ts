import type { infer as zInfer } from 'zod';
import {
  createLocationSchema,
  listLocationsFilterSchema,
} from './locations.schemas.js';
import type {
  CreateLocationPayload,
  FetchLocationsOptions,
  Location,
  LocationObject,
} from './locations.types.js';
import { type ObjectListWithPagination, type Paginated } from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';

export class LocationsClient extends BaseClient {
  async fetch(options?: FetchLocationsOptions): Promise<Paginated<Location>> {
    const filter = listLocationsFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({ ...options, filter });

    const LocationObjectList = await this.httpClient.request<
      ObjectListWithPagination<LocationObject>
    >('GET', `/application/locations?${queries}`, { parseDates: true });

    return {
      data: LocationObjectList.data.map(
        (locationObject) => locationObject.attributes,
      ),
      pagination: LocationObjectList.meta.pagination,
    };
  }

  async create(payload: CreateLocationPayload): Promise<Location> {
    const locationObject = await this.httpClient.request<
      LocationObject,
      zInfer<typeof createLocationSchema>
    >('POST', `/application/locations`, createLocationSchema.parse(payload), {
      parseDates: true,
    });
    return locationObject.attributes;
  }
}
