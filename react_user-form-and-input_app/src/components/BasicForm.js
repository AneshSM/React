import useInput from "../hooks/use-input";

// Email
const emailRegx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validate = (value, check) => {
  return check === "isEmpty"
    ? value.trim() !== ""
    : check === "validEmail"
    ? emailRegx.test(value.trim())
    : check === ""
    ? true
    : false;
};

const BasicForm = (props) => {
  // FirstName
  const {
    value: firstNameValue,
    isValid: enteredfirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetfirstNameInput,
  } = useInput((value) => validate(value, "isEmpty"));

  // LastName
  const {
    value: lastNameValue,
    isValid: enteredlastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetlastNameInput,
  } = useInput((value) => validate(value, ""));

  // Email
  const {
    value: emailValue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emilChangeHandler,
    inputBlurHandler: emilBlurHandler,
    resetInput: resetEmilInput,
  } = useInput((value) => validate(value, "validEmail"));

  let fromIsValid = false;
  fromIsValid =
    enteredEmailIsValid && enteredfirstNameIsValid && enteredlastNameIsValid
      ? true
      : false;
  const onSubmitHandler = (event) => {
    event.preventDefault();

    return fromIsValid
      ? resetEmilInput() &&
          resetfirstNameInput &&
          resetlastNameInput &&
          console.log({ firstNameValue, lastNameValue, emailValue })
      : null;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div
          className={`${"form-control"} ${firstNameInputHasError && "invalid"}`}
        >
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name mustn't be empty</p>
          )}
        </div>
        <div
          className={`${"form-control"} ${lastNameInputHasError && "invalid"}`}
        >
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={`${"form-control"} ${emailInputHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emilChangeHandler}
          onBlur={emilBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
