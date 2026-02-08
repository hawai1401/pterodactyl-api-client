import z from "zod";
export declare const createNodeSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    location_id: z.ZodInt;
    fqdn: z.ZodString;
    scheme: z.ZodEnum<{
        https: "https";
        http: "http";
    }>;
    behind_proxy: z.ZodOptional<z.ZodBoolean>;
    public: z.ZodOptional<z.ZodBoolean>;
    daemon_base: z.ZodOptional<z.ZodString>;
    daemon_sftp: z.ZodInt;
    daemon_listen: z.ZodInt;
    memory: z.ZodInt;
    memory_overallocate: z.ZodInt;
    disk: z.ZodInt;
    disk_overallocate: z.ZodInt;
    upload_size: z.ZodOptional<z.ZodInt>;
    maintenance_mode: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=nodes.schemas.d.ts.map