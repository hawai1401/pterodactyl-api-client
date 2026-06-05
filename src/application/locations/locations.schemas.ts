import { object, string } from 'zod';

export const createLocationSchema = object({
  short: string().min(3).max(60),
  long: string().min(3).max(191),
});

export const listLocationsFilterSchema = object({
  short: string().optional(),
  long: string().optional(),
});
