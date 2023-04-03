import React from "react";
import styles from "../../styles/components/CustomComponentStyles.module.css";
const ColumnContainer = (props) => {
  return (
    <div className={`${styles.column_container}  ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ColumnContainer;
