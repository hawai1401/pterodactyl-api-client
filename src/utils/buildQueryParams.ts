import { paginationSchema, sort } from "../schemas.js";
import type { Sort } from "../types.js";

export default function buildQueryParams<
  T extends Record<string, string | number | undefined> = never,
  U extends Record<string, Sort | undefined> = never,
>(params: {
  page?: number | string | undefined;
  per_page?: number | string | undefined;
  filter?: T | undefined;
  sort?: U | undefined;
}): string {
  const queryParts: string[] = [];

  // Handle filters
  if (params.filter) {
    for (const [key, value] of Object.entries(params.filter)) {
      if (value) queryParts.push(`filter[${key}]=${value}`);
    }
  }

  // Handle sorting
  if (params.sort) {
    for (const [key, direction] of Object.entries(params.sort)) {
      const parsedDirection = sort.parse(direction);
      const prefix = parsedDirection === "descending" ? "-" : "";
      queryParts.push(`sort=${prefix}${key}`);
    }
  }

  const parsedPaginationParams = paginationSchema.parse({
    page: params.page,
    per_page: params.per_page,
  });

  // Handle pagination
  if (parsedPaginationParams.page && parsedPaginationParams.page > 1)
    queryParts.push(`page=${parsedPaginationParams.page}`);

  if (parsedPaginationParams.per_page && parsedPaginationParams.per_page !== 50)
    queryParts.push(`per_page=${parsedPaginationParams.per_page}`);

  return queryParts.join("&");
}
