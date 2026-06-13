import type { PaginationFetchOptions } from '../types.js';
export interface FetchUserServersOptions extends PaginationFetchOptions {
    filter?: {
        uuid?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        external_id?: string | undefined;
    };
}
//# sourceMappingURL=client.types.d.ts.map