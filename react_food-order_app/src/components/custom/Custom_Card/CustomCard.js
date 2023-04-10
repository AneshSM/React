import React from "react";
import cardStyle from "./CustomCard_Style.module.css";
const CustomCard = (props) => {
  const card_classes = `${cardStyle["custom-card"]} ${props.classes}`;
  return (
    <div
      className={card_classes}
      style={{
        ...props.style,
        backgroundImage: "url(props.img)",
        backgroundRepeat: "no-repeat",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default CustomCard;

// sample
//        <CustomCard classes={classes}>content</CustomCard>
