import React, { useContext } from "react";
import { Card, CustomButton } from "../components/common";
import { authPageStyle, componentStyle } from "../styles";
import { AuthContext } from "../auth";

const LogoutPage = (props) => {
  // Context API
  const context = useContext(AuthContext);
  const onsubmitHandler = (event) => {
    event.preventDefault();
    context.onLogout();
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
          classes={{
            button_Classes: `${componentStyle["form-button"]} ${componentStyle["form-cancel-button"]} ${authPageStyle["auth-logout-button"]} `,
          }}
        />
      </form>
    </Card>
  );
};

export default LogoutPage;
