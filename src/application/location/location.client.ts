import type { HttpClient } from '../../class/HttpClient.js';
import { updateLocationSchema, locationId } from './location.schemas.js';
import type { UpdateLocationPayload } from './location.types.js';
import type { Location, LocationObject } from '../locations/locations.types.js';
import type { infer as zInfer } from 'zod';

export class LocationClient {
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    id: number,
  ) {
    this.id = locationId.parse(id);
  }

  async fetch(): Promise<Location> {
    const locationObject = await this.httpClient.request<LocationObject>(
      'GET',
      `/application/locations/${this.id}`,
      { parseDates: true },
    );
    return locationObject.attributes;
  }

  async update(payload: UpdateLocationPayload): Promise<Location> {
    const locationObject = await this.httpClient.request<
      LocationObject,
      zInfer<typeof updateLocationSchema>
    >(
      'PATCH',
      `/application/locations/${this.id}`,
      updateLocationSchema.parse(payload),
      { parseDates: true },
    );
    return locationObject.attributes;
  }

  delete() {
    return this.httpClient.request(
      'DELETE',
      `/application/locations/${this.id}`,
    );
  }
}
