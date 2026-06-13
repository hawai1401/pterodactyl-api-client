import { paginationSchema, sortLiteral } from '../schemas.js';
import type { Sort } from '../types.js';

export function buildQueryParams({
  page,
  per_page,
  filter,
  sort,
}: {
  page?: number | string | undefined;
  per_page?: number | string | undefined;
  filter?: Record<string, string | number | undefined> | undefined;
  sort?: Record<string, Sort | undefined> | undefined;
}): string {
  const queryParts: string[] = [];

  if (filter)
    for (const [key, value] of Object.entries(filter).filter(
      ([, value]) => !!value,
    ))
      queryParts.push(`filter[${key}]=${value}`);

  if (sort)
    for (const [key, direction] of Object.entries(sort).filter(
      ([, value]) => !!value,
    ))
      queryParts.push(
        `sort=${sortLiteral.parse(direction) === 'descending' ? '-' : ''}${key}`,
      );

  const parsedPaginationParams = paginationSchema.parse({
    page,
    per_page,
  });

  if (parsedPaginationParams.page && parsedPaginationParams.page > 1)
    queryParts.push(`page=${parsedPaginationParams.page}`);

  if (parsedPaginationParams.per_page && parsedPaginationParams.per_page !== 50)
    queryParts.push(`per_page=${parsedPaginationParams.per_page}`);

  return queryParts.join('&');
}
