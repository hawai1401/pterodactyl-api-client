import z from "zod";
export const createLocationSchema = z.object({
    short: z.string().min(3).max(60),
    long: z.string().min(3).max(191),
});
