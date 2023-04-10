import React from "react";

import { CustomCard } from "../../custom";
import FoodListContent from "../Food_ListContent/FoodListContent";

import foodListStyle from "./FoodList_Style.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const FoodList = () => {
  const mealsList = DUMMY_MEALS;
  return (
    <>
      <CustomCard classes={foodListStyle["food-list-container"]}>
        {mealsList.map((meal) => {
          return <FoodListContent key={meal.id} food={meal} />;
        })}
      </CustomCard>
    </>
  );
};

export default FoodList;
