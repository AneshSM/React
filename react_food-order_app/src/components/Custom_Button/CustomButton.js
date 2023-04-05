import React from "react";
import custom_Button from "./CustomButton_Style.module.css";
const CustomButton = (props) => {
  return (
    <>
      <button
        className={`${custom_Button["custom-button"]} ${props.classes}`}
        type={props.type}
        disabled={props.isDisabled}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
};

export default CustomButton;

// sample
//        <CustomButton classes={classes}>button</CustomButton>
