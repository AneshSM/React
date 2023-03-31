import React from "react";
import styles from "../../styles/components/CustomComponentStyles.module.css";
const RowContainer = (props) => {
  return (
    <div className={`${styles.row_container}  ${props.className}`}>
      {props.children}
    </div>
  );
};

export default RowContainer;
