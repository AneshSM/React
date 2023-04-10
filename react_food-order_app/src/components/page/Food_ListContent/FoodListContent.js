import React, { useContext } from "react";

import { CustomCard } from "../../custom";

import foodLisContentStyle from "./FoodListContent_Style.module.css";
import FoodDetails from "../Food_Details/FoodDetails";
import FoodOrder from "../Food_Order/FoodOrder";
import CartContext from "../../../context/cart-context";

const FoodListContent = (props) => {
  const cartCTX = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCTX.addItem({
      id: props.food.id,
      name: props.food.name,
      amount: amount,
      price: props.food.price,
    });
  };
  return (
    <>
      <CustomCard classes={foodLisContentStyle["food-list-content"]}>
        <FoodDetails food={props.food} />
        <FoodOrder onAddToCart={addToCartHandler} id={props.food.id} />
      </CustomCard>
    </>
  );
};

export default FoodListContent;
