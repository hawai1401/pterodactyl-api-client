import z from "zod";
export declare const userId: z.ZodInt;
export declare const externalUserId: z.ZodString;
export declare const userIdSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodInt>;
    external_id: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=user.schemas.d.ts.map