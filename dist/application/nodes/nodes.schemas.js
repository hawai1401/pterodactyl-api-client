import z from "zod";
import { descriptionSchema, idSchema, nameSchema } from "../../schemas.js";
export const createNodeSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    location_id: idSchema,
    fqdn: z.string().min(1).max(191),
    scheme: z.literal(["https", "http"]),
    behind_proxy: z.boolean().optional(),
    public: z.boolean().optional(),
    daemon_base: z.string().optional(),
    daemon_sftp: z.int().positive(),
    daemon_listen: z.int().positive(),
    memory: z.int().positive(),
    memory_overallocate: z.int().positive(),
    disk: z.int().positive(),
    disk_overallocate: z.int().positive(),
    upload_size: z.int().positive().optional(),
    maintenance_mode: z.boolean().optional(),
});
