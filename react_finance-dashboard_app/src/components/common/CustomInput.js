import React from "react";
import { authPageStyle } from "../../styles";

const CustomInput = (props) => {
  return (
    <>
      <div className={props.classes.inputContainer_Classes}>
        <label htmlFor="" className={props.classes.label_Classes}>
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          className={`${props.classes.input_Classes} ${
            props.isValid === false ? props.classes.invalid_input : ""
          }`}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </>
  );
};

export default CustomInput;
