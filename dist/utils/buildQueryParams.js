import { paginationSchema, sortLiteral } from '../schemas.js';
export function buildQueryParams({ page, per_page, filter, sort, }) {
    const queryParts = [];
    if (filter)
        for (const [key, value] of Object.entries(filter).filter(([, value]) => !!value))
            queryParts.push(`filter[${key}]=${value}`);
    if (sort)
        for (const [key, direction] of Object.entries(sort).filter(([, value]) => !!value))
            queryParts.push(`sort=${sortLiteral.parse(direction) === 'descending' ? '-' : ''}${key}`);
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
