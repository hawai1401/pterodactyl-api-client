import type { PaginationFetchOptions, BaseFetchOptions } from '../types.js';

export interface FetchUserServersOptions
  extends PaginationFetchOptions, Omit<BaseFetchOptions, 'force'> {
  filter?: {
    uuid?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    external_id?: string | undefined;
  };
}
