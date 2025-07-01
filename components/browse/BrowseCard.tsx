import React from "react";
import { Meal } from "../../shared/types/Meal";
import AddToBasketButton from "../AddToBasketButton";
import DetailsButton from "../DetailsButton";
import Link from "next/link";
import BrowseImage from "./BrowseImage";

const BrowseCard = ({ meal }: { meal: Meal }) => {
  return (
    <div className="card card-xs max-w-75 min-w-75 min-h-75 max-h-75">
      <BrowseImage meal={meal} />
      <div className="card-body">
        <h2 className="card-title">{meal.name}</h2>
        <p>{meal.description}</p>
        <div className="card-actions flex justify-between">
          <Link href={`/meals/${meal.slug}`}>
            <DetailsButton />
          </Link>
          <AddToBasketButton />
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
