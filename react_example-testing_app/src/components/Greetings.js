import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changeText, setText] = useState(false);
  const changeTextValue = () => {
    setText(!changeText);
  };
  return (
    <>
      <Output>{changeText ? "Hello There" : "Welcome"}</Output>
      <button onClick={changeTextValue}>Change Text</button>
    </>
  );
};

export default Greetings;
