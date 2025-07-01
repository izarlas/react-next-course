import React from "react";
import { Meal } from "../../shared/types/Meal";

const BrowseImage = ({ meal }: { meal: Meal }) => {
  return (
    <figure className="rounded-lg">
      <img
        src={meal.imageUrl}
        alt={meal.name}
        className="object-cover w-full h-full"
      />
    </figure>
  );
};

export default BrowseImage;
