import { boolean, coerce, int, literal, object, string, ipv4 } from 'zod';
import {
  descriptionSchema,
  idSchema,
  nameSchema,
  uuidSchema,
} from '../../schemas.js';

export const nodeId = idSchema;
export const allocationId = idSchema;

export const createNodeSchema = object({
  name: nameSchema,
  description: descriptionSchema,
  location_id: idSchema,
  fqdn: string().min(1).max(191),
  scheme: literal(['https', 'http']),
  behind_proxy: boolean().optional(),
  public: boolean().optional(),
  daemon_base: string().optional(),
  daemon_sftp: int().positive(),
  daemon_listen: int().positive(),
  memory: int().positive(),
  memory_overallocate: int().positive(),
  disk: int().positive(),
  disk_overallocate: int().positive(),
  upload_size: int().positive().optional(),
  maintenance_mode: boolean().optional(),
});

export const listNodesFilterSchema = object({
  uuid: uuidSchema.optional(),
  name: string().optional(),
  fqdn: string().optional(),
  daemon_token_id: string().optional(),
});

export const listAllocationsFilterSchema = object({
  ip: ipv4().optional(),
  port: coerce.number<number>().optional(),
});
