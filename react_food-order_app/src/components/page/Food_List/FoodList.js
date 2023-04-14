import React, { useEffect, useState } from "react";

import { CustomCard } from "../../custom";
import FoodListContent from "../Food_ListContent/FoodListContent";

import foodListStyle from "./FoodList_Style.module.css";

const FoodList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-food-order-app-4a405-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  return (
    <>
      <CustomCard classes={foodListStyle["food-list-container"]}>
        {isLoading ? (
          <p className={foodListStyle["data-loading"]}>Loading...</p>
        ) : httpError ? (
          <p className={foodListStyle["data-error"]}>{httpError}</p>
        ) : (
          meals.map((meal) => {
            return <FoodListContent key={meal.id} food={meal} img={meal.img} />;
          })
        )}
      </CustomCard>
    </>
  );
};

export default FoodList;
