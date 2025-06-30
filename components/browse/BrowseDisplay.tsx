import React from "react";
import { Meal } from "../../shared/types/Meal";
import BrowseCard from "./BrowseCard";

const BrowseDisplay = ({ meals }: { meals: Meal[] }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {meals.map((meal: Meal) => (
        <div key={meal.id} className="p-2">
          <BrowseCard meal={meal} />
        </div>
      ))}
    </div>
  );
};

export default BrowseDisplay;
