import z from "zod";

export const locationId = z.int().positive();

export const createLocationSchema = z.object({
  short: z.string().min(3).max(60),
  long: z.string().min(3).max(191),
});

export const editLocationSchema = z
  .object({
    short: z.string().min(3).max(60).optional(),
    long: z.string().min(3).max(191).optional(),
  })
  .refine((data) => data.short || data.long, {
    message: "Either short or long must be provided",
    path: ["short"],
  });
