import Link from "next/link";
import React from "react";
import { Meal } from "../../shared/types/Meal";
import BrowseDisplay from "../../components/browse/BrowseDisplay";
import { getMeals } from "../../lib/meals";

const Meals = () => {
  const meals: Meal[] = getMeals();

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
