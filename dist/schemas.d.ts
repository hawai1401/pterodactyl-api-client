import z from "zod";
export declare const idSchema: z.ZodInt;
export declare const uuidSchema: z.ZodUUID;
export declare const nameSchema: z.ZodString;
export declare const descriptionSchema: z.ZodOptional<z.ZodString>;
export declare const dateSchema: z.ZodDate;
export declare const sort: z.ZodLiteral<"ascending" | "descending">;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
}, z.z.core.$strip>;
export declare const clientSchema: z.ZodObject<{
    apiKey: z.ZodUnion<[z.ZodString, z.ZodString]>;
    panelUrl: z.ZodURL;
    role: z.ZodLiteral<"user" | "admin">;
}, z.z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map