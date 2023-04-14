import React, { useRef, useState } from "react";

//components
import { CustomCard } from "../../custom";
// styles
import cartCheckoutStyle from "./CartCheckout_Style.module.css";
import cartStyle from "../Cart_Style.module.css";
import { FoodActionButton } from "../../page";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInpoutref = useRef();
  const streetInpoutref = useRef();
  const postalCodeInpoutref = useRef();
  const cityInpoutref = useRef();

  const onConsfirmHandler = () => {};

  const onCancelHandler = () => {
    props.onCancel();
  };
  const [formInptValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInpoutref.current.value;
    const enteredStreet = streetInpoutref.current.value;
    const enteredPostalCode = postalCodeInpoutref.current.value;
    const enteredCity = cityInpoutref.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const entereCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: entereCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      entereCityIsValid;

    if (formIsValid) {
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity,
      });
      onCancelHandler();
    } else {
    }
  };

  return (
    <CustomCard classes={cartCheckoutStyle.container}>
      <form className={cartCheckoutStyle.form} onSubmit={onSubmitHandler}>
        <div
          className={`${cartCheckoutStyle.control} ${
            !formInptValidity.name && cartCheckoutStyle.invalid
          }`}
        >
          <label htmlFor="name">Your Name</label>
          <input ref={nameInpoutref} type="text" id="name" />
          {!formInptValidity.name && <p>Enter a valid name</p>}
        </div>
        <div
          className={`${cartCheckoutStyle.control} ${
            !formInptValidity.street && cartCheckoutStyle.invalid
          }`}
        >
          <label htmlFor="street">Street</label>
          <input ref={streetInpoutref} type="text" id="street" />
          {!formInptValidity.street && <p>Enter a valid street</p>}
        </div>
        <div
          className={`${cartCheckoutStyle.control} ${
            !formInptValidity.postalCode && cartCheckoutStyle.invalid
          }`}
        >
          <label htmlFor="postal">Postal Code</label>
          <input ref={postalCodeInpoutref} type="text" id="postal" />
          {!formInptValidity.postalCode && <p>Enter a valid postalCode</p>}
        </div>
        <div
          className={`${cartCheckoutStyle.control} ${
            !formInptValidity.city && cartCheckoutStyle.invalid
          }`}
        >
          <label htmlFor="city">City</label>
          <input ref={cityInpoutref} type="text" id="city" />
          {!formInptValidity.city && <p>Enter a valid city</p>}
        </div>
        <div className={cartCheckoutStyle.actions}>
          <FoodActionButton
            varient={cartCheckoutStyle.button}
            onAtcionBtnClick={onCancelHandler}
            type={"altButton"}
          >
            Cancel
          </FoodActionButton>
          <FoodActionButton
            varient={cartCheckoutStyle.submit}
            onAtcionBtnClick={onConsfirmHandler}
            type={"submit"}
          >
            Confirm
          </FoodActionButton>
        </div>
      </form>
    </CustomCard>
  );
};

export default Checkout;
