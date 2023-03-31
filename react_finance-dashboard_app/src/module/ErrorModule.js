import React from "react";
import ReactDOM from "react-dom";
import { Card, CustomButton } from "../components/common";
import styles from "../styles/module/moduleStyles.module.css";
import componentStyles from "../styles/components/CustomComponentStyles.module.css";
const OverlayModule = (props) => {
  return (
    <Card
      onClick={props.onClose}
      className={`${styles.popup_outer_container} ${props.className}`}
    >
      <Card className={styles.popup_container}>
        <header className={styles.container_header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.container_content}>{props.message}</div>
        <footer className={styles.container_footer}>
          <CustomButton
            label="Close"
            type="submit"
            value="close"
            className={styles.container_button || componentStyles.button}
            onPressed={props.onClose}
          />
        </footer>
      </Card>
    </Card>
  );
};
const ErrorModule = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverlayModule
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModule;
