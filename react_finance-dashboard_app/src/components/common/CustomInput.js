import React, { useState } from "react";
import { customInput, flexBox } from "../../styles";

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
      style={(flexBox, customInput, { ...props.style })}
      onChange={inputHandler}
    ></input>
  );
  return [value, input];
};
export default CustomInput;
