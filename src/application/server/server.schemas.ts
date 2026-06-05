import { boolean, int, object, record, string } from 'zod';
import { idSchema, nameSchema } from '../../schemas.js';

export const applicationServerId = idSchema;
export const applicationServerExternalId = nameSchema;
export const applicationServerDatabaseId = idSchema;

export const applicationServerIdSchema = object({
  id: applicationServerId.optional(),
  external_id: applicationServerExternalId.optional(),
}).refine((data) => data.id || data.external_id, {
  message:
    "Vous devez spécifier au moins un des 2 paramètres de recherche d'un serveur !",
});

export const editApplicationServerDetailsSchema = object({
  name: string().min(1).max(191),
  user: int().positive(),
  external_id: applicationServerExternalId.optional(),
  description: string().optional(),
});

export const editApplicationServerConfigurationSchema = object({
  allocation: int().positive(),
  oom_disabled: boolean().optional(),
  limits: object({
    memory: int().min(0),
    swap: int().min(-1),
    disk: int().min(0),
    io: int().positive().min(10).max(1000),
    threads: string()
      .regex(/^[0-9-,]+$/)
      .optional(),
    cpu: int().min(0),
  }),
  feature_limits: object({
    databases: int().min(0),
    backups: int().min(0),
    allocations: int().min(0).optional(),
  }).optional(),
  add_allocations: int().positive().array().optional(),
  remove_allocations: int().positive().array().optional(),
});

export const editApplicationServerStartupSchema = object({
  startup: string(),
  environment: record(string().uppercase(), string()),
  egg: int().positive(),
  image: string()
    .max(191)
    .regex(/^~?[\w\.\/\-:@ ]*$/),
  skip_scripts: boolean(),
});

export const createApplicationDatabaseSchema = object({
  database: string().min(1).max(48),
  remote: string().regex(/^[0-9%.]{1,15}$/),
  host: int().positive(),
});
