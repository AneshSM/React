import "../../styles/ComponentStyles/commonStyles/CustomInput.css";
import React, { useState } from "react";

const CustomInput = (props) => {
  const [value, setvalue] = useState("");
  const inputHandler = (event) => {
    setvalue(event.target.value);
  };
  const input = (
    <input
      id={props.id}
      type={props.type}
      min={props.min}
      max={props.max}
      step={props.step}
      style={props.style}
      onChange={inputHandler}
      required
    ></input>
  );
  return [value, input];
};
export default CustomInput;
