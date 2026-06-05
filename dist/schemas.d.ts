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
export declare const clientSchema: import("zod").ZodObject<{
    apiKey: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodString]>;
    panelUrl: import("zod").ZodURL;
    role: import("zod").ZodLiteral<"user" | "admin">;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=schemas.d.ts.map