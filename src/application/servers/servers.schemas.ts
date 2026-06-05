import { array, boolean, int, object, record, string } from 'zod';
import {
  descriptionSchema,
  idSchema,
  nameSchema,
  uuidSchema,
} from '../../schemas.js';

export const createServerSchema = object({
  external_id: nameSchema.optional(),
  name: nameSchema,
  description: descriptionSchema,
  user: idSchema,
  egg: idSchema,
  docker_image: string()
    .max(191)
    .regex(/^~?[\w\.\/\-:@ ]*$/),
  startup: string(),
  environment: record(string().uppercase(), string()),
  skip_scripts: boolean().optional(),
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
  }),
  allocation: object({
    default: int().positive(),
    additional: array(int().positive()).optional(),
  }),
  start_on_completion: boolean().optional(),
});

export const listServersFilterSchema = object({
  uuid: uuidSchema.optional(),
  uuidShort: string().length(8).optional(),
  name: string().optional(),
  description: string().optional(),
  image: string().optional(),
  external_id: string().optional(),
});
