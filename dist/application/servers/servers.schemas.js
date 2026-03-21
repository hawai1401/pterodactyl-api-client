import z from "zod";
import { descriptionSchema, idSchema, nameSchema, uuidSchema, } from "../../schemas.js";
export const createServerSchema = z.object({
    external_id: nameSchema.optional(),
    name: nameSchema,
    description: descriptionSchema,
    user: idSchema,
    egg: idSchema,
    docker_image: z
        .string()
        .max(191)
        .regex(/^~?[\w\.\/\-:@ ]*$/),
    startup: z.string(),
    environment: z.record(z.string().uppercase(), z.string()),
    skip_scripts: z.boolean().optional(),
    oom_disabled: z.boolean().optional(),
    limits: z.object({
        memory: z.int().min(0),
        swap: z.int().min(-1),
        disk: z.int().min(0),
        io: z.int().positive().min(10).max(1000),
        threads: z
            .string()
            .regex(/^[0-9-,]+$/)
            .optional(),
        cpu: z.int().min(0),
    }),
    feature_limits: z.object({
        databases: z.int().min(0),
        backups: z.int().min(0),
        allocations: z.int().min(0).optional(),
    }),
    allocation: z.object({
        default: z.int().positive(),
        additional: z.array(z.int().positive()).optional(),
    }),
    start_on_completion: z.boolean().optional(),
});
export const listServersFilterSchema = z.object({
    uuid: uuidSchema.optional(),
    uuidShort: z.string().length(8).optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    external_id: z.string().optional(),
});
