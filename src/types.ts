export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type AccountRole = 'user' | 'admin';

export type BasePayload = Record<string, unknown>;

export type IPv4 = `${number}.${number}.${number}.${number}`;

export interface ApiPagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: Record<string, string>;
}

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

export interface ObjectList<T extends { object: string }> {
  object: 'list';
  data: T[];
}

export interface ObjectListWithPagination<
  T extends { object: string },
> extends ObjectList<T> {
  meta: {
    pagination: ApiPagination;
  };
}
export interface Pagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  links: Record<string, string>;
}
export interface Paginated<T> {
  data: T[];
  pagination: Pagination;
}

export interface PaginationFetchOptions {
  page?: number | undefined;
  per_page?: number | undefined;
}

export type EnvironmentVariable = Uppercase<string>;

export type Sort = 'ascending' | 'descending';
