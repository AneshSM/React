import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import headerStyle from "./AppHeader_Style.module.css";
import CustomButton from "../../components/Custom_Button/CustomButton";

const AppHeader = (props) => {
  const classes = {
    button_Classes: headerStyle["header-cart-button"],
    // card_Classes: ,
  };
  return (
    <>
      <header className={headerStyle["app-header"]} style={props.style}>
        <div className={headerStyle["header-title"]}>React Meals</div>
        <div className={headerStyle["header-options"]}>
          <CustomButton
            type="submit"
            classes={classes.button_Classes}
            style={{}}
          >
            <div>
              <FaShoppingCart />
              <span>Your Cart</span>
              <div className={headerStyle["header-item-counter"]}>
                {/* {props.value} */}0
              </div>
            </div>
          </CustomButton>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
