import React from "react";
import CustomCard from "../Custom_Card/CustomCard";

import listStyle from "./CustomList_Style.module.css";
import CustomButton from "../Custom_Button/CustomButton";
const CustomList = () => {
  const classes = {
    card_Classes: listStyle["list-container"],
  };
  return (
    <>
      <CustomCard classes={classes}>
        {/* <CustomButton
          style={{ backgroundColor: "#8a2b06", color: "#ffff" }}
          classes={classes}
        >
          button
        </CustomButton> */}
      </CustomCard>
    </>
  );
};

export default CustomList;
