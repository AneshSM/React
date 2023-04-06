import React from "react";
import CustomCard from "../Custom_Card/CustomCard";

import listStyle from "./CustomList_Style.module.css";
const CustomList = () => {
  const classes = {
    card_Classes: listStyle["list-container"],
  };
  return (
    <>
      <CustomCard classes={classes}></CustomCard>
    </>
  );
};

export default CustomList;
