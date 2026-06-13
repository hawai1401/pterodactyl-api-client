import { coerce, date, int, literal, object, string, url, uuidv4 } from 'zod';

export const idSchema = int().positive();
export const uuidSchema = uuidv4();
export const nameSchema = string().min(1).max(191);
export const descriptionSchema = string().optional();
export const dateSchema = date();

export const sortLiteral = literal(['ascending', 'descending']);

export const paginationSchema = object({
  page: coerce.number<number>().int().min(1).optional(),
  per_page: coerce.number<number>().min(1).max(100).optional(),
});

export const cacheOptionsSchema = object({
  users: int().positive().optional(),
  servers: int().positive().optional(),
  locations: int().positive().optional(),
  nodes: int().positive().optional(),
  nests: int().positive().optional(),
  eggs: int().positive().optional(),
  allocations: int().positive().optional(),
  databases: int().positive().optional(),
}).optional();

export const clientSchema = object({
  apiKey: string().startsWith('ptlc_').or(string().startsWith('ptla_')),
  panelUrl: url(),
  role: literal(['user', 'admin']),
  cache: cacheOptionsSchema,
});
