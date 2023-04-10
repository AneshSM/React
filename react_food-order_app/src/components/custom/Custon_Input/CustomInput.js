import React from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={props.varient.inputContainer_Classes}>
        <label htmlFor="" className={props.varient.label_Classes}>
          {props.label}
        </label>
        <input
          ref={ref}
          type={props.type}
          id={props.id}
          className={`${props.varient.input_Classes} ${
            props.isValid === false ? props.classes.invalid_input : ""
          }`}
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.defaultValue}
          // value={props.value}
          // onChange={props.onChange}
          // onBlur={props.onBlur}
        />
      </div>
    </>
  );
});

export default CustomInput;
