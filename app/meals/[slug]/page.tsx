import React from "react";
import { getMeal } from "../../../lib/meals";
import { Meal } from "../../../shared/types/Meal";
import BrowseImage from "../../../components/browse/BrowseImage";
import AddToBasketButton from "../../../components/AddToBasketButton";

const MealDetails = async ({ params }: { params: { slug: string } }) => {
  let meal: Meal;

  try {
    meal = await getMeal(params?.slug);
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
        <div className="card card-xs max-w-90 min-w-90 min-h-60 max-h-60">
          <BrowseImage meal={meal} />
        </div>
        <div className="ml-2 mr-2 flex flex-col">
          <div className="flex-1">
            <p className="text-2xl flex-1">{meal.name}</p>
            <p>{meal.description}</p>
          </div>

          <AddToBasketButton />
        </div>
      </div>
    </>
  );
};

export default MealDetails;
