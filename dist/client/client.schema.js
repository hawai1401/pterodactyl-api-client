import { object, string } from 'zod';
import { uuidSchema } from '../schemas.js';
export const userServerFilterSchema = object({
    uuid: uuidSchema.optional(),
    name: string().optional(),
    description: string().optional(),
    external_id: string().optional(),
});
