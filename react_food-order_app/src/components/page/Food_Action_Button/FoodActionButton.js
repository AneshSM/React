import React from "react";
import { CustomButton } from "../../custom";
import foodActionButtonSryle from "./FoodActionButon_Style.module.css";
const FoodActionButton = (props) => {
  return (
    <>
      <CustomButton
        varient={`${foodActionButtonSryle["food-button"]} ${props.varient}  ${
          props.type === "altButton"
            ? foodActionButtonSryle["food-button-alt"]
            : ""
        }`}
        onCustomButtonClick={props.onAtcionBtnClick}
        type="submit"
      >
        {props.children}
      </CustomButton>
    </>
  );
};

export default FoodActionButton;
