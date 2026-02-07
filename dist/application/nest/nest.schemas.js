import z from "zod";
export const nestId = z.int().positive();
export const nestEggId = z.int().positive();
