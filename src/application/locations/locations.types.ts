import type { PaginationFetchOptions, BasePayload, Sort } from '../../types.js';

export interface FetchLocationsOptions extends PaginationFetchOptions {
  filter?: {
    short?: string | undefined;
    long?: string | undefined;
  };
  sort?: {
    id?: Sort | undefined;
  };
}

export interface CreateLocationPayload extends BasePayload {
  short: string;
  long: string;
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
export interface Location {
  id: number;
  short: string;
  long: string;
  updatedAt: Date;
  createdAt: Date;
}
