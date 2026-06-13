import type { infer as zInfer } from 'zod';
import type { HttpClient } from '../../class/HttpClient.js';
import type { LocationManager } from './location.manager.js';
import {
  removeManagerCacheSymbol,
  setManagerCacheSymbol,
} from '../../symbols.js';
import { updateLocationSchema } from './location.schemas.js';
import type {
  BaseLocation,
  LocationObject,
  UpdateLocationPayload,
} from './location.types.js';
import type { BaseFetchOptions } from '../../types.js';

export class Location {
  public id!: number;
  public short!: string;
  public long!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    private httpClient: HttpClient,
    private locationManager: LocationManager,
    data: Partial<BaseLocation> & Pick<BaseLocation, 'id'>,
  ) {
    Object.assign(this, data);
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<LocationObject>(
          'GET',
          `/application/locations/${this.id}`,
          { parseDates: true },
        )
      ).attributes,
    );

    this.locationManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async update(
    payload: UpdateLocationPayload,
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<
          LocationObject,
          zInfer<typeof updateLocationSchema>
        >(
          'PATCH',
          `/application/locations/${this.id}`,
          updateLocationSchema.parse(payload),
          { parseDates: true },
        )
      ).attributes,
    );

    this.locationManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async delete(): Promise<void> {
    this.locationManager[removeManagerCacheSymbol](this.id);
    await this.httpClient.request(
      'DELETE',
      `/application/locations/${this.id}`,
    );
  }
}
