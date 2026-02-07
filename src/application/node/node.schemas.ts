import z from "zod";

export const nodeId = z.int().positive();

export const createNodeSchema = z.object({
  name: z.string().min(1).max(191),
  description: z.string().optional(),
  location_id: z.int().positive(),
  fqdn: z.string().min(1).max(191),
  scheme: z.enum(["https", "http"]),
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
