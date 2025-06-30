import Link from "next/link";
import React from "react";
import { Meal } from "../../shared/types/Meal";
import BrowseDisplay from "../../components/browse/BrowseDisplay";

const Meals = () => {
  const meals: Meal[] = [
    {
      id: "1",
      name: "Burger",
      description: "Beef, tomato, mayo",
      price: 8,
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5aBTucVcZb3vkTQrkmas6eKD83PaXhyatnA&s",
        dimensions: {
          width: 1000,
          height: 1000,
        },
      },
      mealSlug: "burger",
    },
    {
      id: "2",
      name: "Pizza",
      description: "Mozzarella, tomato, mushrooms",
      price: 10,
      image: {
        url: "https://images.pexels.com/photos/6147819/pexels-photo-6147819.jpeg",
        dimensions: {
          width: 1000,
          height: 1000,
        },
      },
      mealSlug: "pizza",
    },
  ];

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
