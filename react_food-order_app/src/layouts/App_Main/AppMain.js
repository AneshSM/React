import React from "react";

import { mealsImage } from "../../constants/assets";
import { COLOR } from "../../constants/color";

import { FoodList, FoodSummary } from "../../components/page";

import mainStyle from "./AppMain_Style.module.css";

const AppMain = (props) => {
  return (
    <>
      <main
        className={mainStyle["main-content"]}
        style={{
          backgroundColor: COLOR.color_PrimaryLight,
          position: "relative",
        }}
      >
        <img
          className={mainStyle["food-main-img"]}
          src={mealsImage}
          alt="food img"
        />
        <FoodSummary varient={mainStyle["food-description-card"]} />
        <FoodList />
      </main>
    </>
  );
};

export default AppMain;
