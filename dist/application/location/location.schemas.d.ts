export declare const locationId: import("zod").ZodInt;
export declare const createLocationSchema: import("zod").ZodObject<{
    short: import("zod").ZodString;
    long: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const updateLocationSchema: import("zod").ZodObject<{
    short: import("zod").ZodOptional<import("zod").ZodString>;
    long: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const listLocationsFilterSchema: import("zod").ZodObject<{
    short: import("zod").ZodOptional<import("zod").ZodString>;
    long: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=location.schemas.d.ts.map