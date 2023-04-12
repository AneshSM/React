import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //Name
  const {
    value: nameValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Email
  const emailRegx =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const {
    value: emailValue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emilChangeHandler,
    inputBlurHandler: emilBlurHandler,
    resetInput: resetEmilInput,
  } = useInput((value) => emailRegx.test(value.trim()));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(nameValue);
    console.log(emailValue);

    resetNameInput();
    resetEmilInput();

    // nameInputRef.current.value = "";     /* Manipulates the DOM directly */
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div
        className={nameInputHasError ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameInputHasError && (
          <p className="error-text">Name mustn't be empty</p>
        )}
      </div>
      <div
        className={emailInputHasError ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emilChangeHandler}
          onBlur={emilBlurHandler}
          value={emailValue}
        />
        {emailInputHasError && <p className="error-text">Invalid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
