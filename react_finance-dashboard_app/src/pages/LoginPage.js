import React, { useReducer } from "react";

import { Card, CustomButton } from "../components/common";
import { componentStyle, authPageStyle } from "../styles";

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
  return { isValid: false };
};

const LoginPage = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formState, dispatchform] = useReducer(formReducer, { isValid: null });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = (event) => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validatePasswordHandler = (event) => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    formState.isValid && props.onLogin(emailState.value);
  };

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
          <div className={componentStyle.row_container}>
            <label htmlFor="" className={componentStyle["form-input-label"]}>
              Email
            </label>
            <input
              type="text"
              className={`${componentStyle["form-input"]} ${
                authPageStyle["auth-input"]
              } ${
                emailState.isValid === false
                  ? authPageStyle["auth-input-invalid"]
                  : ""
              }`}
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div className={componentStyle.row_container}>
            <label htmlFor="" className={componentStyle["form-input-label"]}>
              Password
            </label>
            <input
              type="password"
              className={`${componentStyle["form-input"]} ${
                authPageStyle["auth-input"]
              } ${
                passwordState.isValid === false
                  ? authPageStyle["auth-input-invalid"]
                  : ""
              } `}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
        </Card>
        <Card
          className={`${componentStyle.row_container} ${componentStyle["form-button-container"]}`}
        >
          <CustomButton
            style={{}}
            label="Submit"
            type="submit"
            className={`${componentStyle["form-button"]} ${authPageStyle["auth-button"]}`}
            onPressed={props.onLogin}
          />
        </Card>
      </form>
    </Card>
  );
};

export default LoginPage;
