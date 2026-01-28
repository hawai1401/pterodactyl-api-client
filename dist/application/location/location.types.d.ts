import type { BaseArgs, ListwithPagination } from "../../types.js";
export interface Location<T extends Date | string> {
    object: "location";
    attributes: {
        id: number;
        short: string;
        long: string;
        updated_at: T;
        created_at: T;
    };
}
export interface LocationList extends ListwithPagination {
    data: Location<string>[];
}
export interface CreateLocationArgs extends BaseArgs {
    short: string;
    long: string;
}
export interface EditLocationArgs extends BaseArgs {
    short?: string | undefined;
    long?: string | undefined;
}
//# sourceMappingURL=location.types.d.ts.map