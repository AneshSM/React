import React from "react";
import cardStyle from "./CustomCard_Style.module.css";
const CustomCard = (props) => {
  const card_classes = `${cardStyle["custom-card"]} ${props.classes.card_Classes}`;
  return (
    <div className={card_classes} style={props.style}>
      {props.children}
    </div>
  );
};

export default CustomCard;

// sample
//        <CustomCard classes={classes}>content</CustomCard>
