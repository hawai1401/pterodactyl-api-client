import z from "zod";
export const userServerFilterSchema = z.object({
    uuid: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    external_id: z.string().optional(),
});
