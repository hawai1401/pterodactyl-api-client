import z from 'zod';
import type HttpClient from '../../class/HttpClient.js';
import {
  createLocationSchema,
  listLocationsFilterSchema,
} from './locations.schemas.js';
import type { CreateLocationArgs, LocationList } from './locations.types.js';
import type { Location } from '../location/location.types.js';
import type { BaseListArgs, Sort } from '../../types.js';
import buildQueryParams from '../../utils/buildQueryParams.js';

export default class LocationsClient {
  constructor(private httpClient: HttpClient) {}

  async list(
    options: {
      filter?: {
        short?: string | undefined;
        long?: string | undefined;
      };
      sort?: {
        id?: Sort | undefined;
      };
    } & BaseListArgs = {},
  ) {
    const filter = listLocationsFilterSchema.optional().parse(options.filter);
    const queries = buildQueryParams<
      {
        short?: string | undefined;
        long?: string | undefined;
      },
      {
        id?: Sort | undefined;
      }
    >({ ...options, filter });
    const res = await this.httpClient.request<LocationList>(
      'GET',
      `/application/locations?${queries}`,
    );
    return {
      ...res,
      data: res.data.map((location) => ({
        ...location,
        attributes: {
          ...location.attributes,
          created_at: new Date(location.attributes.created_at),
          updated_at: new Date(location.attributes.updated_at),
        },
      })),
    };
  }

  async create(options: CreateLocationArgs) {
    const res = await this.httpClient.request<
      Location<string>,
      z.infer<typeof createLocationSchema>
    >('POST', `/application/locations`, createLocationSchema.parse(options));
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }
}
