import { useReducer } from "react";

const initialSate = { value: "", isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialSate;
};

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialSate);
  const { value: inputValue, isTouched: inputTouched } = inputState;

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && inputTouched;

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchInput({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};
export default useInput;
