import z from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number<number>().optional(),
  per_page: z.coerce.number<number>().min(1).max(100).optional(),
  sort: z
    .object({
      timestamp: z.literal(["ascending", "descending"]).optional(),
    })
    .optional(),
});
