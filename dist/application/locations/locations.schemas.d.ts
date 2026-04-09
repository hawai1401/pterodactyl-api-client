import z from 'zod';
export declare const createLocationSchema: z.ZodObject<{
    short: z.ZodString;
    long: z.ZodString;
}, z.z.core.$strip>;
export declare const listLocationsFilterSchema: z.ZodObject<{
    short: z.ZodOptional<z.ZodString>;
    long: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=locations.schemas.d.ts.map