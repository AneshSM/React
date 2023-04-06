import React from "react";
import mainStyle from "./AppMain_Style.module.css";
import { CustomCard, CustomList } from "../../components";
import { mealsImage } from "../../constants/assets";
const AppMain = (props) => {
  const classes = { card_Classes: mainStyle["main-description-card"] };
  return (
    <>
      <main className={mainStyle["main-content"]}>
        <img className={mainStyle["main-img"]} src={mealsImage} alt="" />
        <CustomCard classes={classes}></CustomCard>
        <CustomList />
      </main>
    </>
  );
};

export default AppMain;
