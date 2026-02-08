import z from "zod";
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
//# sourceMappingURL=servers.schemas.d.ts.map