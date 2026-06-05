import { coerce, ipv4, object } from 'zod';
import { idSchema } from '../../schemas.js';

export const nodeId = idSchema;
export const allocationId = idSchema;

export const listAllocationsFilterSchema = object({
  ip: ipv4().optional(),
  port: coerce.number<number>().optional(),
});
