import z from "zod";
import { idSchema, nameSchema } from "../../schemas.js";
export const userId = idSchema;
export const externalUserId = nameSchema;
export const userIdSchema = z
    .object({
    id: userId.optional(),
    external_id: externalUserId.optional(),
})
    .refine((data) => data.id || data.external_id, {
    message: "Vous devez spécifier au moins un des 2 paramètres de recherche d'un utilisateur !",
});
