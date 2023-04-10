import React from "react";
import foodLisContentStyle from "../Food_ListContent/FoodListContent_Style.module.css";
import { COLOR } from "../../../constants/color";
const FoodDetails = (props) => {
  return (
    <section className={foodLisContentStyle["food-content-details"]}>
      <span
        className={foodLisContentStyle["food-details"]}
        style={{ fontWeight: 700, fontSize: "larger" }}
      >
        {props.food.name}
      </span>
      <span
        className={foodLisContentStyle["food-details"]}
        style={{ fontSize: "14px", fontStyle: "italic", fontWeight: 500 }}
      >
        {props.food.description}
      </span>
      <span
        className={foodLisContentStyle["food-details"]}
        style={{
          fontSize: "larger",
          fontWeight: 800,
          color: COLOR.color_TertiaryLight,
        }}
      >
        {props.food.price}
      </span>
    </section>
  );
};

export default FoodDetails;
