import React from "react";
import ReactDOM from "react-dom";

import popUpStyle from "./PopUpModule_Style.module.css";
const Backdrop = (props) => {
  return (
    <div
      className={popUpStyle["popup-outer-container"]}
      onClick={props.onClose}
    />
  );
};
const OverlayModule = (props) => {
  return <div className={popUpStyle["overlay-module"]}>{props.children}</div>;
};
const PopUpModule = (props) => {
  const portalToTag = document.getElementById("root-overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalToTag)}
      {ReactDOM.createPortal(
        <OverlayModule
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        >
          {props.children}
        </OverlayModule>,
        portalToTag
      )}
    </>
  );
};

export default PopUpModule;
