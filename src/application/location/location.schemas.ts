import z from "zod";
import { idSchema } from "../../schemas.js";

export const locationId = idSchema;

export const editLocationSchema = z
  .object({
    short: z.string().min(3).max(60).optional(),
    long: z.string().min(3).max(191).optional(),
  })
  .refine((data) => data.short || data.long, {
    message: "Either short or long must be provided",
    path: ["short"],
  });
