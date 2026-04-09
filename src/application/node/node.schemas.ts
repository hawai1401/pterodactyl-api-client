import z from 'zod';
import { idSchema } from '../../schemas.js';

export const nodeId = idSchema;
export const allocationId = idSchema;

export const listAllocationsFilterSchema = z.object({
  ip: z.ipv4().optional(),
  port: z.coerce.number<number>().optional(),
});
