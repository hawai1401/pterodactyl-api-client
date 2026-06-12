import { boolean, email, object, string } from 'zod';
import { idSchema, nameSchema } from '../../schemas.js';

export const userId = idSchema;
export const externalUserId = nameSchema;

export const userIdSchema = object({
  id: userId.optional(),
  external_id: externalUserId.optional(),
}).refine((data) => data.id || data.external_id, {
  message:
    "Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !",
});

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
