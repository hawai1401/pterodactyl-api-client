import { coerce, date, int, literal, object, string, url, uuidv4 } from 'zod';
export const idSchema = int().positive();
export const uuidSchema = uuidv4();
export const nameSchema = string().min(1).max(191);
export const descriptionSchema = string().optional();
export const dateSchema = date();
export const sortLiteral = literal(['ascending', 'descending']);
export const paginationSchema = object({
    page: coerce.number().int().min(1).optional(),
    per_page: coerce.number().min(1).max(100).optional(),
});
export const clientSchema = object({
    apiKey: string().startsWith('ptlc_').or(string().startsWith('ptla_')),
    panelUrl: url(),
    role: literal(['user', 'admin']),
});
