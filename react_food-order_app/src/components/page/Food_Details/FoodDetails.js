import React from "react";
import foodLisContentStyle from "../Food_ListContent/FoodListContent_Style.module.css";
import { COLOR } from "../../../constants/color";
const FoodDetails = (props) => {
  return (
    <section className={foodLisContentStyle["food-content-details"]}>
      <span className={foodLisContentStyle["food-details"]} style={{}}>
        {props.food.name}
      </span>
      <span
        className={foodLisContentStyle["food-details"]}
        style={{ fontStyle: "italic" }}
      >
        {props.food.description}
      </span>
      <span className={foodLisContentStyle["food-details"]} style={{}}>
        {props.food.price}
      </span>
    </section>
  );
};

export default FoodDetails;
