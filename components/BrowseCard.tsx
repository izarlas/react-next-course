import React from "react";
import { Meal } from "../shared/types/Meal";
import Image from "next/image";
import AddToBasketButton from "./AddToBasketButton";

const BrowseCard = ({ meal }: { meal: Meal }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={meal.image.url}
          alt={meal.name}
          width={meal.image.dimensions.width}
          height={meal.image.dimensions.height}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {meal.name}</h2>
        <p>{meal.description}</p>
        <div className="card-actions justify-end">
          <AddToBasketButton />
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
