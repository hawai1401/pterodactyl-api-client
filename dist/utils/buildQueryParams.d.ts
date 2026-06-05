import type { Sort } from '../types.js';
export declare function buildQueryParams({ page, per_page, filter, sort, }: {
    page?: number | string | undefined;
    per_page?: number | string | undefined;
    filter?: Record<string, string | number | undefined> | undefined;
    sort?: Record<string, Sort | undefined> | undefined;
}): string;
//# sourceMappingURL=buildQueryParams.d.ts.map