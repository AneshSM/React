import React from "react";
import headerStyle from "./AppHeader_Style.module.css";
import CustomButton from "../Custom_Button/CustomButton";
const AppHeader = (props) => {
  const classes = {
    button_Classes: headerStyle["header-cart-button"],
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
            Your cart
          </CustomButton>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
