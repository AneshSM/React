import React from "react";
import { Card, CustomButton } from "../components/common";
import styles from "../styles/module/moduleStyles.module.css";
import componentStyles from "../styles/components/CustomComponentStyles.module.css";
const ErrorModule = (props) => {
  return (
    <Card className={`${styles.popup_outer_container} ${props.className}`}>
      <Card className={styles.popup_container}>
        <header className={styles.container_header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.container_content}>{props.message}</div>
        <CustomButton
          label="Close"
          type="submit"
          className={styles.container_button || componentStyles.button}
          onPressed={props.onSubmit}
        />
      </Card>
    </Card>
  );
};

export default ErrorModule;
