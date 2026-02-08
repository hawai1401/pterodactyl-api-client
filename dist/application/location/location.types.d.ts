import type { BaseArgs } from "../../types.js";
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
export interface EditLocationArgs extends BaseArgs {
    short?: string | undefined;
    long?: string | undefined;
}
//# sourceMappingURL=location.types.d.ts.map