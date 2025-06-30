import React from "react";
import { Meal } from "../../shared/types/Meal";
import Image from "next/image";
import AddToBasketButton from "../AddToBasketButton";
import DetailsButton from "../DetailsButton";
import Link from "next/link";

const BrowseCard = ({ meal }: { meal: Meal }) => {
  return (
    <div className="card shadow-sm">
      <figure className="w-75 h-75">
        <Image
          src={meal.image.url}
          alt={meal.name}
          width={meal.image.dimensions.width}
          height={meal.image.dimensions.height}
        />
      </figure>
      <div className="card-body p-1">
        <h2 className="card-title"> {meal.name}</h2>
        <p>{meal.description}</p>
        <div className="card-actions flex justify-between">
          <div>
            <Link href={`/meals/${meal.mealSlug}`}>
              <DetailsButton />
            </Link>
          </div>
          <AddToBasketButton />
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
