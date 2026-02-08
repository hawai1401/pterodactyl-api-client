import z from "zod";
export declare const createUserSchema: z.ZodObject<{
    email: z.ZodEmail;
    username: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    root_admin: z.ZodOptional<z.ZodBoolean>;
    external_id: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
//# sourceMappingURL=users.schemas.d.ts.map