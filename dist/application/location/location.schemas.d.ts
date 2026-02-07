import z from "zod";
export declare const locationId: z.ZodInt;
export declare const createLocationSchema: z.ZodObject<{
    short: z.ZodString;
    long: z.ZodString;
}, z.z.core.$strip>;
export declare const editLocationSchema: z.ZodObject<{
    short: z.ZodOptional<z.ZodString>;
    long: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=location.schemas.d.ts.map