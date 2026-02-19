import { paginationSchema, sort } from "../schemas.js";
export default function buildQueryParams(params) {
    const queryParts = [];
    // Handle filters
    if (params.filter) {
        for (const [key, value] of Object.entries(params.filter)) {
            if (value)
                queryParts.push(`filter[${key}]=${value}`);
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
