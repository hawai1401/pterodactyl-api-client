import { coerce } from 'zod';
export declare const idSchema: import("zod").ZodInt;
export declare const uuidSchema: import("zod").ZodUUID;
export declare const nameSchema: import("zod").ZodString;
export declare const descriptionSchema: import("zod").ZodOptional<import("zod").ZodString>;
export declare const dateSchema: import("zod").ZodDate;
export declare const sortLiteral: import("zod").ZodLiteral<"ascending" | "descending">;
export declare const paginationSchema: import("zod").ZodObject<{
    page: import("zod").ZodOptional<coerce.ZodCoercedNumber<number>>;
    per_page: import("zod").ZodOptional<coerce.ZodCoercedNumber<number>>;
}, import("zod/v4/core").$strip>;
export declare const cacheOptionsSchema: import("zod").ZodOptional<import("zod").ZodObject<{
    users: import("zod").ZodOptional<import("zod").ZodInt>;
    servers: import("zod").ZodOptional<import("zod").ZodInt>;
    locations: import("zod").ZodOptional<import("zod").ZodInt>;
    nodes: import("zod").ZodOptional<import("zod").ZodInt>;
    nests: import("zod").ZodOptional<import("zod").ZodInt>;
    eggs: import("zod").ZodOptional<import("zod").ZodInt>;
    allocations: import("zod").ZodOptional<import("zod").ZodInt>;
    databases: import("zod").ZodOptional<import("zod").ZodInt>;
}, import("zod/v4/core").$strip>>;
export declare const clientSchema: import("zod").ZodObject<{
    apiKey: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodString]>;
    panelUrl: import("zod").ZodURL;
    role: import("zod").ZodLiteral<"user" | "admin">;
    cache: import("zod").ZodOptional<import("zod").ZodObject<{
        users: import("zod").ZodOptional<import("zod").ZodInt>;
        servers: import("zod").ZodOptional<import("zod").ZodInt>;
        locations: import("zod").ZodOptional<import("zod").ZodInt>;
        nodes: import("zod").ZodOptional<import("zod").ZodInt>;
        nests: import("zod").ZodOptional<import("zod").ZodInt>;
        eggs: import("zod").ZodOptional<import("zod").ZodInt>;
        allocations: import("zod").ZodOptional<import("zod").ZodInt>;
        databases: import("zod").ZodOptional<import("zod").ZodInt>;
    }, import("zod/v4/core").$strip>>;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=schemas.d.ts.map