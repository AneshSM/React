import React, { useContext, useEffect, useMemo, useReducer } from "react";

import { Card, CustomButton, CustomInput } from "../components/common";
import { componentStyle, authPageStyle } from "../styles";
import { AuthContext } from "../auth";

// Reducer functions
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 8 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 8 };
  }
  return { value: "", isValid: false };
};

const formReducer = (state, action) => {
  if (action.type === "VALID_DATA") {
    return { isValid: true };
  }
  return { isValid: false };
};

// Component
const LoginPage = (props) => {
  // Context API
  const context = useContext(AuthContext);

  // Reducers
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formState, dispatchform] = useReducer(formReducer, { isValid: null });

  // input onChange handlers
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };
  //input onBlur handler
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  // Form data
  const { isValid: isValidEmail, value: email } = emailState;
  const { isValid: isValidPassword, calue: password } = passwordState;

  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      dispatchform({ type: "VALID_DATA" });
    }
  }, [isValidEmail, isValidPassword, email, password]);

  // form Handler
  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      context.onLogin({ email, password });
    } else if (!isValidEmail) {
      dispatchEmail({ type: "USER_INPUT", val: "" });
      console.log("invalid email");
    } else if (!isValidPassword) {
      dispatchPassword({ type: "USER_INPUT", val: "" });
      console.log("invalid password");
    }
  };

  // Styles
  const classes = {
    // custom Input style classes
    inputContainer_Classes: `${componentStyle.row_container} ${componentStyle["input-container"]}`,
    label_Classes: componentStyle["form-input-label"],
    input_Classes: `${componentStyle["form-input"]} ${authPageStyle["auth-input"]} `,
    invalid_input: `${authPageStyle["auth-input-invalid"]}`,

    // custom Button style classes
    button_Classes: `${componentStyle.button} ${componentStyle["form-button"]} ${authPageStyle["auth-button"]}`,
  };
  // Render
  return (
    <Card
      className={`${componentStyle.column_container} ${authPageStyle["login-container"]}`}
    >
      <form
        className={`${componentStyle.column_container} ${componentStyle["from-container"]} ${authPageStyle["auth-form"]}`}
        onSubmit={onsubmitHandler}
      >
        <Card
          className={`${componentStyle.column_container} ${componentStyle["form-input-container"]}`}
        >
          <CustomInput
            id={"email"}
            label={"Email"}
            type={"email"}
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            classes={classes}
            isValid={isValidEmail}
          />
          <CustomInput
            id={"password"}
            label={"Password"}
            type={"password"}
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            classes={classes}
            isValid={isValidPassword}
          />
        </Card>
        <Card
          className={`${componentStyle.row_container} ${componentStyle["form-button-container"]}`}
        >
          <CustomButton
            label="Submit"
            type="submit"
            classes={classes}
            onPressed={props.onLogin}
          />
        </Card>
      </form>
    </Card>
  );
};

export default LoginPage;
