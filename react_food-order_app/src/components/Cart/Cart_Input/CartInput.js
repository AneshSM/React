import React from "react";
import { CustomInput } from "../../custom";

import cartStyle from "../Cart_Style.module.css";
const CartInput = React.forwardRef((props, ref) => {
  const input_Classes = {
    // custom Input style classes
    inputContainer_Classes: `${cartStyle["food-input-container"]}`,
    label_Classes: cartStyle["food-input-label"],
    input_Classes: `${cartStyle["food-quantity-input"]} `,
    invalid_input: ``,
  };
  return (
    <>
      <CustomInput
        ref={ref}
        id={"Amount_" + props.id}
        label="Amount"
        varient={input_Classes}
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
        // value={1}
        // onChange={""}
        // onBlur={""}
        isValid={true}
      />
    </>
  );
});

export default CartInput;
