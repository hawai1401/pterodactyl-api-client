import { coerce } from 'zod';
export declare const nodeId: import("zod").ZodInt;
export declare const allocationId: import("zod").ZodInt;
export declare const listAllocationsFilterSchema: import("zod").ZodObject<{
    ip: import("zod").ZodOptional<import("zod").ZodIPv4>;
    port: import("zod").ZodOptional<coerce.ZodCoercedNumber<number>>;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=node.schemas.d.ts.map