export type method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type BaseArgs = Record<string, any>;

export type IP = `${number}.${number}.${number}.${number}`;

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: Record<string, string>;
}

type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

export interface List {
  object: "list";
}

export interface ListwithPagination extends List {
  meta: {
    pagination: Pagination;
  };
}

export interface BaseListArgs {
  page?: number | undefined;
  per_page?: number | undefined;
}

export type EnvironmentVariable = Uppercase<string>;

export type Sort = "ascending" | "descending";
