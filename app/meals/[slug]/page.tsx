import React from "react";
import { getMeal } from "../../../lib/meals";
import { Meal } from "../../../shared/types/Meal";
import BrowseImage from "../../../components/browse/BrowseImage";

const MealDetails = ({ params }: { params: { slug: string } }) => {
  let meal: Meal;

  try {
    meal = getMeal(params.slug);
  } catch (error) {
    throw new Error(
      `Failed to fetch meal with slug ${params.slug}. ${
        (error as Error).message
      }`
    );
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="card card-xs max-w-150 min-w-150 min-h-150 max-h-150">
          <BrowseImage meal={meal} />
        </div>
        <div className="">
          <h1>{meal.name}</h1>
          <p>{meal.description}</p>
        </div>
      </div>
    </>
  );
};

export default MealDetails;
