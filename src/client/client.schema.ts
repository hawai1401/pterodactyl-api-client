import z from 'zod';
import { uuidSchema } from '../schemas.js';

export const userServerFilterSchema = z.object({
  uuid: uuidSchema.optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  external_id: z.string().optional(),
});
