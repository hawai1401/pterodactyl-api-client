import z from "zod";
import { idSchema, nameSchema } from "../../schemas.js";

export const applicationServerId = idSchema;
export const applicationServerExternalId = nameSchema;
export const applicationServerDatabaseId = idSchema;

export const applicationServerIdSchema = z
  .object({
    id: applicationServerId.optional(),
    external_id: applicationServerExternalId.optional(),
  })
  .refine((data) => data.id || data.external_id, {
    message:
      "Vous devez spécifier au moins un des 2 paramètres de recherche d'un serveur !",
  });

export const editApplicationServerDetailsSchema = z.object({
  name: z.string().min(1).max(191),
  user: z.int().positive(),
  external_id: applicationServerExternalId.optional(),
  description: z.string().optional(),
});

export const editApplicationServerConfigurationSchema = z.object({
  allocation: z.int().positive(),
  oom_disabled: z.boolean().optional(),
  limits: z.object({
    memory: z.int().positive().min(0).optional(),
    swap: z.int().min(-1).optional(),
    disk: z.int().positive().min(0).optional(),
    io: z.int().positive().min(10).max(1000).optional(),
    threads: z
      .string()
      .regex(/^[0-9-,]+$/)
      .optional(),
    cpu: z.int().positive().min(0).optional(),
  }),
  feature_limits: z
    .object({
      databases: z.int().positive().min(0),
      backups: z.int().positive().min(0),
      allocations: z.int().positive().min(0).optional(),
    })
    .optional(),
  add_allocations: z.int().positive().array().optional(),
  remove_allocations: z.int().positive().array().optional(),
});

export const editApplicationServerStartupSchema = z.object({
  startup: z.string(),
  environment: z.record(z.string().uppercase(), z.string()),
  egg: z.int().positive(),
  image: z
    .string()
    .max(191)
    .regex(/^~?[\w\.\/\-:@ ]*$/),
  skip_scripts: z.boolean(),
});

export const createApplicationDatabaseSchema = z.object({
  database: z.string().min(1).max(48),
  remote: z.string().regex(/^[0-9%.]{1,15}$/),
  host: z.int().positive(),
});
