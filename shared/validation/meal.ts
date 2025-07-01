import * as z from "zod/v4";
import { Meal } from "../types/Meal";

const mealSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.string(),
  slug: z.string(),
});

const mealsArraySchema = z.array(mealSchema);

export function isMeal(value: unknown): Meal {
  const result = mealSchema.safeParse(value);

  if (!result.success) {
    throw new Error(
      `Invalid value, object is not a meal: ${result.error.message}`
    );
  }

  return result.data;
}

export function isMealsArray(value: unknown): Meal[] {
  const result = mealsArraySchema.safeParse(value);

  if (!result.success) {
    throw new Error(`
      Invalid value, array did not match meals: ${result.error.message}
    `);
  }

  return result.data;
}
