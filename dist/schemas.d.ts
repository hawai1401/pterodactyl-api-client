import z from "zod";
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    sort: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodOptional<z.ZodLiteral<"ascending" | "descending">>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map