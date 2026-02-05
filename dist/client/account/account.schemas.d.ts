import z from "zod";
export declare const passwordSchema: z.ZodObject<{
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const a2fSchema: z.ZodObject<{
    password: z.ZodString;
    code: z.z.ZodCoercedString<string>;
}, z.z.core.$strip>;
export declare const accountActivityPaginationSchema: z.ZodObject<{
    page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    per_page: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
    sort: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodOptional<z.ZodLiteral<"ascending" | "descending">>;
    }, z.z.core.$strip>>;
    event: z.ZodOptional<z.ZodLiteral<"user:api-key.create" | "user:api-key.delete" | "user:ssh-key.create" | "user:ssh-key.delete" | "user:account.email-changed" | "user:account.password-changed" | "user:two-factor.create" | "user:two-factor.delete" | "auth:success" | "auth:fail" | "auth:checkpoint">>;
}, z.z.core.$strip>;
export declare const createApiKeySchema: z.ZodObject<{
    description: z.ZodString;
    allowed_ips: z.ZodOptional<z.ZodArray<z.ZodIPv4>>;
}, z.z.core.$strip>;
export declare const deleteApiKeySchema: z.ZodObject<{
    identifier: z.ZodString;
}, z.z.core.$strip>;
export declare const editEmailSchema: z.ZodObject<{
    password: z.ZodString;
    email: z.ZodEmail;
}, z.z.core.$strip>;
export declare const editPasswordSchema: z.ZodObject<{
    password: z.ZodString;
    current_password: z.ZodString;
    password_confirmation: z.ZodString;
}, z.z.core.$strip>;
export declare const createSshKeySchema: z.ZodObject<{
    name: z.ZodString;
    public_key: z.ZodString;
}, z.z.core.$strip>;
export declare const deleteSshKeySchema: z.ZodObject<{
    fingerprint: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=account.schemas.d.ts.map