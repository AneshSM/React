import React from "react";
import { Card, CustomButton } from "../components/common";
import { authPageStyle, componentStyle } from "../styles";

const LogoutPage = (props) => {
  const onsubmitHandler = (event) => {
    event.preventDefault();
    props.onClick();
  };
  return (
    <Card
      className={`${componentStyle.column_container} ${authPageStyle["logout-container"]}`}
    >
      <form
        className={`${componentStyle.column_container} ${componentStyle["from-container"]} ${authPageStyle["auth-form"]}`}
        onSubmit={onsubmitHandler}
      >
        <CustomButton
          style={{}}
          label="Logout"
          type="submit"
          className={`${componentStyle["form-button"]} ${componentStyle["form-cancel-button"]} ${authPageStyle["auth-logout-button"]} `}
        />
      </form>
    </Card>
  );
};

export default LogoutPage;
