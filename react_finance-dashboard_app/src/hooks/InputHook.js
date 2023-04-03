import { useState } from "react";
import { COLOR } from "../constants";

const InputHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [inputStyle, setinputStyle] = useState({});
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    style: inputStyle,
    onChange: (e) => {
      setinputStyle({
        backgroundColor: COLOR.color_60,
        borderColor: COLOR.font_color_30,
        color: COLOR.font_color_60,
      });
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default InputHook;
