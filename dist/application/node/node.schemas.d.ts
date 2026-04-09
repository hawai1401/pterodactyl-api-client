import z from 'zod';
export declare const nodeId: z.ZodInt;
export declare const allocationId: z.ZodInt;
export declare const listAllocationsFilterSchema: z.ZodObject<{
    ip: z.ZodOptional<z.ZodIPv4>;
    port: z.ZodOptional<z.z.ZodCoercedNumber<number>>;
}, z.z.core.$strip>;
//# sourceMappingURL=node.schemas.d.ts.map