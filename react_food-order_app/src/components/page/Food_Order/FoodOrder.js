import React, { useRef } from "react";

import { CartInput } from "../../Cart";
import FoodActionButton from "../Food_Action_Button/FoodActionButton";

import foodLisContentStyle from "../Food_ListContent/FoodListContent_Style.module.css";
const FoodOrder = (props) => {
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddToCart(+amountRef.current.value);
  };
  return (
    <>
      <form
        className={foodLisContentStyle["food-content-buy"]}
        onSubmit={submitHandler}
      >
        <CartInput ref={amountRef} />
        <FoodActionButton>+ Add to Cart</FoodActionButton>
      </form>
    </>
  );
};

export default FoodOrder;
