import { coerce } from 'zod';
export declare const passwordSchema: import("zod").ZodObject<{
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const a2fSchema: import("zod").ZodObject<{
    password: import("zod").ZodString;
    code: coerce.ZodCoercedString<string>;
}, import("zod/v4/core").$strip>;
export declare const accountActivityEvent: import("zod").ZodLiteral<"user:api-key.create" | "user:api-key.delete" | "user:ssh-key.create" | "user:ssh-key.delete" | "user:account.email-changed" | "user:account.password-changed" | "user:two-factor.create" | "user:two-factor.delete" | "auth:success" | "auth:fail" | "auth:checkpoint">;
export declare const createApiKeySchema: import("zod").ZodObject<{
    description: import("zod").ZodString;
    allowed_ips: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodIPv4>>;
}, import("zod/v4/core").$strip>;
export declare const deleteApiKeySchema: import("zod").ZodObject<{
    identifier: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const setEmailSchema: import("zod").ZodObject<{
    password: import("zod").ZodString;
    email: import("zod").ZodEmail;
}, import("zod/v4/core").$strip>;
export declare const setPasswordSchema: import("zod").ZodObject<{
    password: import("zod").ZodString;
    current_password: import("zod").ZodString;
    password_confirmation: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const createSshKeySchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    public_key: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
export declare const deleteSshKeySchema: import("zod").ZodObject<{
    fingerprint: import("zod").ZodString;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=account.schemas.d.ts.map