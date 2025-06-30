import React from "react";
import { Meal } from "../../shared/types/Meal";
import Image from "next/image";
import AddToBasketButton from "../AddToBasketButton";
import DetailsButton from "../DetailsButton";
import Link from "next/link";

const BrowseCard = ({ meal }: { meal: Meal }) => {
  return (
    <div className="card card-xs max-w-75 min-w-75 min-h-75 max-h-75">
      <figure className="rounded-lg">
        <img
          src={meal.imageUrl}
          alt={meal.name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.name}</h2>
        <p>{meal.description}</p>
        <div className="card-actions flex justify-between">
          <Link href={`/meals/${meal.mealSlug}`}>
            <DetailsButton />
          </Link>
          <AddToBasketButton />
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
