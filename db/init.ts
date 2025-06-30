import { Meal } from "../shared/types/Meal";
import sql from "better-sqlite3";

const db = sql("./db/meals.db");

const initMeals: Meal[] = [
  {
    id: 1,
    name: "Burger",
    description: "Beef, tomato, mayo",
    price: 8,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5aBTucVcZb3vkTQrkmas6eKD83PaXhyatnA&s",
    mealSlug: "burger",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Mozzarella, tomato, mushrooms",
    price: 10,
    imageUrl:
      "https://images.pexels.com/photos/6147819/pexels-photo-6147819.jpeg",
    mealSlug: "pizza",
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mealSlug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    imageUrl TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL
  )  
`
).run();

function initMockData() {
  const stmt = db.prepare(`
    INSERT INTO meals VALUES (
      null,
      @mealSlug,
      @name,
      @imageUrl,
      @description,
      @price
    )`);

  for (const meal of initMeals) {
    stmt.run(meal);
  }
}

initMockData();
