import type {
  BaseFetchOptions,
  BasePayload,
  Filters,
  PaginationFetchOptions,
  Sorts,
} from '../../types.js';

export type LocationId = number;

export interface ListLocationsOptions
  extends PaginationFetchOptions, Omit<BaseFetchOptions, 'force'> {
  filter?: Filters<'short' | 'long'>;
  sort?: Sorts<'id'>;
}

export interface CreateLocationPayload extends BasePayload {
  short: string;
  long: string;
}

export interface UpdateLocationPayload extends BasePayload {
  short?: string | undefined;
  long?: string | undefined;
}

export interface LocationObject {
  object: 'location';
  attributes: {
    id: number;
    short: string;
    long: string;
    updated_at: Date;
    created_at: Date;
  };
}

export interface BaseLocation {
  id: number;
  short: string;
  long: string;
  updatedAt: Date;
  createdAt: Date;
}
