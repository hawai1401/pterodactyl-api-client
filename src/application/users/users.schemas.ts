import { boolean, email, object, string } from 'zod';

export const createUserSchema = object({
  email: email().min(1).max(191),
  username: string().min(1).max(191),
  first_name: string().min(1).max(191),
  last_name: string().min(1).max(191),
  password: string().min(8).optional(),
  language: string().optional(),
  root_admin: boolean().optional(),
  external_id: string().min(1).max(191).optional(),
});

export const listUsersFilterSchema = object({
  uuid: string().optional(),
  username: string().optional(),
  email: string().optional(),
  external_id: string().optional(),
});
