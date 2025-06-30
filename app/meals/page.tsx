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
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5aBTucVcZb3vkTQrkmas6eKD83PaXhyatnA&s",
      mealSlug: "burger",
    },
    {
      id: "2",
      name: "Pizza",
      description: "Mozzarella, tomato, mushrooms",
      price: 10,
      imageUrl:
        "https://images.pexels.com/photos/6147819/pexels-photo-6147819.jpeg",
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
