import type { Sort } from "../types.js";
export default function buildQueryParams<T extends Record<string, string | number | undefined> = never, U extends Record<string, Sort | undefined> = never>(params: {
    page?: number | string | undefined;
    per_page?: number | string | undefined;
    filter?: T | undefined;
    sort?: U | undefined;
}): string;
//# sourceMappingURL=buildQueryParams.d.ts.map