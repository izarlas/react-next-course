import Link from "next/link";
import React from "react";
import { Meal } from "../../shared/types/Meal";
import BrowseDisplay from "../../components/browse/BrowseDisplay";
import { getMeals } from "../../lib/meals";

const Meals = async () => {
  let meals: Meal[] = [];

  try {
    meals = await getMeals();
  } catch (error) {
    throw new Error(`Failed to fetch meals: ${(error as Error).message}`);
  }

  return (
    <>
      <header>
        <h1>Browse meals</h1>
        <Link href="meals/create">Create</Link>
      </header>
      <main>
        <BrowseDisplay meals={meals} />
      </main>
    </>
  );
};

export default Meals;
