export declare const userId: import("zod").ZodInt;
export declare const externalUserId: import("zod").ZodString;
export declare const userIdSchema: import("zod").ZodObject<{
    id: import("zod").ZodOptional<import("zod").ZodInt>;
    external_id: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const createUserSchema: import("zod").ZodObject<{
    email: import("zod").ZodEmail;
    username: import("zod").ZodString;
    first_name: import("zod").ZodString;
    last_name: import("zod").ZodString;
    password: import("zod").ZodOptional<import("zod").ZodString>;
    language: import("zod").ZodOptional<import("zod").ZodString>;
    root_admin: import("zod").ZodOptional<import("zod").ZodBoolean>;
    external_id: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const listUsersFilterSchema: import("zod").ZodObject<{
    uuid: import("zod").ZodOptional<import("zod").ZodString>;
    username: import("zod").ZodOptional<import("zod").ZodString>;
    email: import("zod").ZodOptional<import("zod").ZodString>;
    external_id: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=user.schemas.d.ts.map