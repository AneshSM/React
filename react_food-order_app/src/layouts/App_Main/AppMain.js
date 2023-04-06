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
        <CustomCard classes={classes}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </CustomCard>
      </main>
    </>
  );
};

export default AppMain;
