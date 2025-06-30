import Link from "next/link";
import React from "react";
import { Meal } from "../../shared/types/Meal";
import BrowseDisplay from "../../components/browse/BrowseDisplay";
import { getMeals } from "../../lib/meals";

const Meals = () => {
  let meals: Meal[] = [];

  try {
    meals = getMeals();
  } catch (error) {
    throw new Error(`Failed to fetch meals: ${(error as Error).message}`);
  }

  return (
    <>
      <header>
        <h1>Browse meals</h1>
        <Link href="meals/share">Share</Link>
      </header>
      <main>
        <BrowseDisplay meals={meals} />
      </main>
    </>
  );
};

export default Meals;
