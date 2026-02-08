import z from "zod";
export declare const locationId: z.ZodInt;
export declare const editLocationSchema: z.ZodObject<{
    short: z.ZodOptional<z.ZodString>;
    long: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=location.schemas.d.ts.map