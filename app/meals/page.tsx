import Link from "next/link";
import React from "react";
import BrowseCard from "../../components/BrowseCard";
import { Meal } from "../../shared/types/Meal";

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
    },
  ];

  return (
    <>
      <header>
        <h1>Browse meals</h1>
        <Link href="meals/share">Share</Link>
      </header>
      <main className="flex flex-row">
        {meals.map((meal: Meal) => (
          <div key={meal.id} className="basis-sm">
            <BrowseCard meal={meal} />
          </div>
        ))}
      </main>
    </>
  );
};

export default Meals;
