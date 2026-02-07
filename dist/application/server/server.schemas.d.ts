import z from "zod";
export declare const applicationServerId: z.ZodInt;
export declare const applicationServerExternalId: z.ZodString;
export declare const applicationServerDatabaseId: z.ZodInt;
export declare const createServerSchema: z.ZodObject<{
    external_id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    user: z.ZodInt;
    egg: z.ZodInt;
    docker_image: z.ZodString;
    startup: z.ZodString;
    environment: z.ZodRecord<z.ZodString, z.ZodString>;
    skip_scripts: z.ZodOptional<z.ZodBoolean>;
    oom_disabled: z.ZodOptional<z.ZodBoolean>;
    limits: z.ZodObject<{
        memory: z.ZodInt;
        swap: z.ZodInt;
        disk: z.ZodInt;
        io: z.ZodInt;
        threads: z.ZodOptional<z.ZodString>;
        cpu: z.ZodInt;
    }, z.z.core.$strip>;
    feature_limits: z.ZodObject<{
        databases: z.ZodInt;
        backups: z.ZodInt;
        allocations: z.ZodOptional<z.ZodInt>;
    }, z.z.core.$strip>;
    allocation: z.ZodObject<{
        default: z.ZodInt;
        additional: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    }, z.z.core.$strip>;
    start_on_completion: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
export declare const editApplicationServerDetailsSchema: z.ZodObject<{
    name: z.ZodString;
    user: z.ZodInt;
    external_id: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const editApplicationServerConfigurationSchema: z.ZodObject<{
    allocation: z.ZodInt;
    oom_disabled: z.ZodOptional<z.ZodBoolean>;
    limits: z.ZodObject<{
        memory: z.ZodOptional<z.ZodInt>;
        swap: z.ZodOptional<z.ZodInt>;
        disk: z.ZodOptional<z.ZodInt>;
        io: z.ZodOptional<z.ZodInt>;
        threads: z.ZodOptional<z.ZodString>;
        cpu: z.ZodOptional<z.ZodInt>;
    }, z.z.core.$strip>;
    feature_limits: z.ZodOptional<z.ZodObject<{
        databases: z.ZodInt;
        backups: z.ZodInt;
        allocations: z.ZodOptional<z.ZodInt>;
    }, z.z.core.$strip>>;
    add_allocations: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    remove_allocations: z.ZodOptional<z.ZodArray<z.ZodInt>>;
}, z.z.core.$strip>;
export declare const editApplicationServerStartupSchema: z.ZodObject<{
    startup: z.ZodString;
    environment: z.ZodRecord<z.ZodString, z.ZodString>;
    egg: z.ZodInt;
    image: z.ZodString;
    skip_scripts: z.ZodBoolean;
}, z.z.core.$strip>;
export declare const createApplicationDatabaseSchema: z.ZodObject<{
    database: z.ZodString;
    remote: z.ZodString;
    host: z.ZodInt;
}, z.z.core.$strip>;
//# sourceMappingURL=server.schemas.d.ts.map