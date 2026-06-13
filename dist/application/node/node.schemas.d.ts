import { coerce } from 'zod';
export declare const nodeId: import("zod").ZodInt;
export declare const allocationId: import("zod").ZodInt;
export declare const createNodeSchema: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    location_id: import("zod").ZodInt;
    fqdn: import("zod").ZodString;
    scheme: import("zod").ZodLiteral<"https" | "http">;
    behind_proxy: import("zod").ZodOptional<import("zod").ZodBoolean>;
    public: import("zod").ZodOptional<import("zod").ZodBoolean>;
    daemon_base: import("zod").ZodOptional<import("zod").ZodString>;
    daemon_sftp: import("zod").ZodInt;
    daemon_listen: import("zod").ZodInt;
    memory: import("zod").ZodInt;
    memory_overallocate: import("zod").ZodInt;
    disk: import("zod").ZodInt;
    disk_overallocate: import("zod").ZodInt;
    upload_size: import("zod").ZodOptional<import("zod").ZodInt>;
    maintenance_mode: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>;
export declare const listNodesFilterSchema: import("zod").ZodObject<{
    uuid: import("zod").ZodOptional<import("zod").ZodUUID>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    fqdn: import("zod").ZodOptional<import("zod").ZodString>;
    daemon_token_id: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>;
export declare const listAllocationsFilterSchema: import("zod").ZodObject<{
    ip: import("zod").ZodOptional<import("zod").ZodIPv4>;
    port: import("zod").ZodOptional<coerce.ZodCoercedNumber<number>>;
}, import("zod/v4/core").$strip>;
//# sourceMappingURL=node.schemas.d.ts.map