export declare const applicationServerId: import("zod").ZodInt;
export declare const applicationServerExternalId: import("zod").ZodString;
export declare const applicationServerDatabaseId: import("zod").ZodInt;
export declare const applicationServerIdSchema: import("zod").ZodObject<{
    id: import("zod").ZodOptional<import("zod").ZodInt>;
    external_id: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const editApplicationServerDetailsSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    user: import("zod").ZodInt;
    external_id: import("zod").ZodOptional<import("zod").ZodString>;
    description: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const editApplicationServerConfigurationSchema: import("zod").ZodObject<{
    allocation: import("zod").ZodInt;
    oom_disabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
    limits: import("zod").ZodObject<{
        memory: import("zod").ZodInt;
        swap: import("zod").ZodInt;
        disk: import("zod").ZodInt;
        io: import("zod").ZodInt;
        threads: import("zod").ZodOptional<import("zod").ZodString>;
        cpu: import("zod").ZodInt;
    }, import("zod/v4/core").$strip>;
    feature_limits: import("zod").ZodOptional<import("zod").ZodObject<{
        databases: import("zod").ZodInt;
        backups: import("zod").ZodInt;
        allocations: import("zod").ZodOptional<import("zod").ZodInt>;
    }, import("zod/v4/core").$strip>>;
    add_allocations: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodInt>>;
    remove_allocations: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodInt>>;
}, import("zod/v4/core").$strip>;
export declare const editApplicationServerStartupSchema: import("zod").ZodObject<{
    startup: import("zod").ZodString;
    environment: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
    egg: import("zod").ZodInt;
    image: import("zod").ZodString;
    skip_scripts: import("zod").ZodBoolean;
}, import("zod/v4/core").$strip>;
export declare const createApplicationDatabaseSchema: import("zod").ZodObject<{
    database: import("zod").ZodString;
    remote: import("zod").ZodString;
    host: import("zod").ZodInt;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=server.schemas.d.ts.map