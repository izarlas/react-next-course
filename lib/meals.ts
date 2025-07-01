import sql from "better-sqlite3";
import { Meal } from "../shared/types/Meal";
import { isMeal, isMealsArray } from "../shared/validation/meal";

const db = sql("./db/meals.db");

export function getMeals(): Meal[] {
  const meals = db.prepare(`SELECT * FROM meals`).all();

  return isMealsArray(meals);
}

export function getMeal(slug: string): Meal {
  const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);

  return isMeal(meal);
}

export function createMeal() {}

export function deleteMeal() {}

export function updateMeal() {}
