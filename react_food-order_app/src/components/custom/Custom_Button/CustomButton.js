import React from "react";
import custom_Button from "./CustomButton_Style.module.css";
const CustomButton = (props) => {
  return (
    <>
      <button
        className={`${custom_Button["custom-button"]} ${props.varient}`}
        type={props.type}
        style={props.style}
        onClick={props.onCustomButtonClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default CustomButton;

// sample
//        <CustomButton classes={classes}>button</CustomButton>
