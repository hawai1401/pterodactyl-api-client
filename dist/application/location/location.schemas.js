import { object, string } from 'zod';
import { idSchema } from '../../schemas.js';
export const locationId = idSchema;
export const updateLocationSchema = object({
    short: string().min(3).max(60).optional(),
    long: string().min(3).max(191).optional(),
}).refine((data) => data.short || data.long, {
    message: 'Either short or long must be provided',
    path: ['short'],
});
